import * as React from "react";
import { PagingUtil } from "./PagingUtil";

interface IPaging2Props {
	/** ページングパラメーター */
	params: IPaging;
	/** クリック時のハンドラー */
	handleClickPage: (ev: React.MouseEvent, page: number) => void;
}

export interface IPaging {
	totalcount: number;
	page: number;
	perpage: number;
	totalpage: number;
}

export const Paging2: React.StatelessComponent<IPaging2Props> = (
	props: IPaging2Props
) => {
	const { params, handleClickPage } = props;

	// 数値以外のところをクリックしたときのハンドラ
	const handleClickNonNumber = (ev: React.MouseEvent, addPage: number) => {
		ev.preventDefault();
		const page = PagingUtil.calcPrevNextPage(
			params.page,
			params.totalpage,
			addPage
		);
		handleClickPage(ev, page);
	};

	// 数値部分をクリックしたときのハンドラ
	const handleClickNumber = (ev: React.MouseEvent, page: number) => {
		ev.preventDefault();
		handleClickPage(ev, page);
	};

	const pagingNumberObj = PagingUtil.calcPagingNumber(
		params.page,
		params.totalpage
	);

	const pagintClassName = {
		prev: pagingNumberObj.hasPrev ? "page-item" : "page-item disabled",
		prevSibling: pagingNumberObj.hasPrevSibling
			? "page-item"
			: "page-item disabled",
		nextSibling: pagingNumberObj.hasNextSibling
			? "page-item"
			: "page-item disabled",
		next: pagingNumberObj.hasNext ? "page-item" : "page-item disabled"
	};

	return (
		<div className="d-flex justify-content-between">
			<div>
				<ul className="pagination">
					<li className={pagintClassName.prev}>
						<a
							href="#"
							className="page-link"
							onClick={ev => {
								handleClickNonNumber(ev, -10);
							}}
						>
							&laquo;
						</a>
					</li>
					<li className={pagintClassName.prevSibling}>
						<a
							href="#"
							className="page-link"
							onClick={ev => {
								handleClickNonNumber(ev, -1);
							}}
						>
							&lt;
						</a>
					</li>
					{pagingNumberObj.numberArray.map(num => {
						return (
							<li
								key={num}
								className={
									params.page === num
										? "page-item active"
										: "page-item"
								}
							>
								<a
									href="#"
									className="page-link isnum"
									onClick={ev => {
										handleClickNumber(ev, num);
									}}
								>
									{num.toString()}
								</a>
							</li>
						);
					})}
					<li className={pagintClassName.nextSibling}>
						<a
							href="#"
							className="page-link"
							onClick={ev => {
								handleClickNonNumber(ev, 1);
							}}
						>
							&gt;
						</a>
					</li>
					<li className={pagintClassName.next}>
						<a
							href="#"
							className="page-link"
							onClick={ev => {
								handleClickNonNumber(ev, 10);
							}}
						>
							&raquo;
						</a>
					</li>
				</ul>
			</div>
			<div>
				{`全 ${params.totalcount} 件 (${params.page} / ${
					params.totalpage
				} ページ) ${params.perpage} 件ずつ表示`}
			</div>
		</div>
	);
};
