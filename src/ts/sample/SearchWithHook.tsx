import * as React from "react";
import { HogeAPI } from "./HogeAPI";
import { Paging2 } from "../lib/Paging2";
import { useBasicSearch } from "../lib/useBasicSearch";

interface ISearchWithHookProps {}

export type ISearchWithHookCondition = {
	[str: string]: string | string[];
	cond1: string;
	cond2: string;
	forcheck: string[];
};

export interface IRecord {
	hoge: string;
	fuga: string;
}

const initialCondition: ISearchWithHookCondition = {
	cond1: "",
	cond2: "",
	forcheck: []
};

/**
 * hook で作成した検索コンポーネントのサンプル
 * @param props props
 */
export const SearchWithHook: React.StatelessComponent<ISearchWithHookProps> = (
	props: ISearchWithHookProps
) => {
	const {
		handleChangeInput,
		handleSearch,
		handleReset,
		handleClickPage,
		condition,
		pageObj,
		records
	} = useBasicSearch<ISearchWithHookCondition, IRecord>(
		"searchwithhook",
		initialCondition,
		HogeAPI.search2
	);

	return (
		<div className="p-3">
			<div>
				<div>search</div>
				<div>
					条件1 :{" "}
					<input
						type="text"
						name="cond1"
						value={condition.cond1}
						onChange={handleChangeInput}
						className="form-control"
					/>
				</div>
				<div>
					条件2 :{" "}
					<input
						type="text"
						name="cond2"
						value={condition.cond2}
						onChange={handleChangeInput}
						className="form-control"
					/>
				</div>
				<div>
					条件3 :{" "}
					<input
						type="checkbox"
						name="forcheck"
						value="abc"
						checked={condition.forcheck.some(c => {
							return c === "abc";
						})}
						onChange={ev => {
							handleChangeInput(ev, true);
						}}
					/>
					ABC
					<input
						type="checkbox"
						name="forcheck"
						value="xyz"
						checked={condition.forcheck.some(c => {
							return c === "xyz";
						})}
						onChange={ev => {
							handleChangeInput(ev, true);
						}}
					/>
					XYZ
				</div>
				<div>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={handleSearch}
					>
						検索
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={handleReset}
					>
						リセット
					</button>
				</div>
			</div>
			<div>
				<Paging2 params={pageObj} handleClickPage={handleClickPage} />
			</div>
			<div>
				<table className="table table-striped table-bordered table-sm">
					<thead>
						<tr>
							<th style={{ width: "8em" }}>column1</th>
							<th>column2</th>
						</tr>
					</thead>
					<tbody>
						{records.map((record, index) => {
							return (
								<tr key={index}>
									<td>{record.fuga}</td>
									<td>{record.hoge}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
