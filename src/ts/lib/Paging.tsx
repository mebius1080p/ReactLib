import * as React from "react";
import { PagingUtil } from "./PagingUtil";

interface IPagingProps {
	paging: IPaging;
	onClickPage: (ev: React.MouseEvent, page: number) => void;
}

interface IPagingState {}

export interface IPaging {
	totalcount: number;
	page: number;
	perpage: number;
	totalpage: number;
}

/**
 * ページング部を表示するコンポーネント
 */
export class Paging extends React.Component<IPagingProps, IPagingState> {
	constructor(props: IPagingProps) {
		super(props);
		this.handleClickPaging = this.handleClickPaging.bind(this);
	}
	/**
	 * handleClickPaging 行先のページ数はこのコンポーネント内で計算して、props で受け取ったハンドラを呼び出す
	 */
	public handleClickPaging(ev: React.MouseEvent): void {
		ev.preventDefault();
		const targetElm: HTMLElement = ev.target as HTMLElement;
		let page = 1;
		const { paging, onClickPage } = this.props;
		if (targetElm.classList.contains("isnum")) {
			page = Number(targetElm.textContent);
		} else {
			const addpage: number = Number(targetElm.getAttribute("data-add"));
			page = PagingUtil.calcPrevNextPage(
				paging.page,
				paging.totalpage,
				addpage
			);
		}
		onClickPage(ev, page);
	}
	public render(): JSX.Element {
		const { paging } = this.props;
		const pagingNumberObj = PagingUtil.calcPagingNumber(
			paging.page,
			paging.totalpage
		);
		return (
			<div className="d-flex justify-content-between">
				<div>
					<ul className="pagination">
						<li
							className={
								pagingNumberObj.hasPrev
									? "page-item"
									: "page-item disabled"
							}
						>
							<a
								href="#"
								className="page-link"
								data-add="-10"
								onClick={this.handleClickPaging}
							>
								&laquo;
							</a>
						</li>
						<li
							className={
								pagingNumberObj.hasPrevSibling
									? "page-item"
									: "page-item disabled"
							}
						>
							<a
								href="#"
								className="page-link"
								data-add="-1"
								onClick={this.handleClickPaging}
							>
								&lt;
							</a>
						</li>
						{pagingNumberObj.numberArray.map(num => {
							return (
								<li
									key={num}
									className={
										paging.page === num
											? "page-item active"
											: "page-item"
									}
								>
									<a
										href="#"
										className="page-link isnum"
										onClick={this.handleClickPaging}
									>
										{num.toString()}
									</a>
								</li>
							);
						})}
						<li
							className={
								pagingNumberObj.hasNextSibling
									? "page-item"
									: "page-item disabled"
							}
						>
							<a
								href="#"
								className="page-link"
								data-add="1"
								onClick={this.handleClickPaging}
							>
								&gt;
							</a>
						</li>
						<li
							className={
								pagingNumberObj.hasNext
									? "page-item"
									: "page-item disabled"
							}
						>
							<a
								href="#"
								className="page-link"
								data-add="10"
								onClick={this.handleClickPaging}
							>
								&raquo;
							</a>
						</li>
					</ul>
				</div>
				<div>
					{`全 ${paging.totalcount} 件 (${paging.page} / ${
						paging.totalpage
					} ページ) ${paging.perpage} 件ずつ表示`}
				</div>
			</div>
		);
	}
}
