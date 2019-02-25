import * as React from "react";
import { HogeAPI } from "./HogeAPI";
import { IPaging, Paging2 } from "../lib/Paging2";
import { SSManager } from "../lib/SSManager";

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

const initialPageObj: IPaging = {
	totalcount: 0,
	page: 1,
	perpage: 10,
	totalpage: 1
};

const ssm = new SSManager("searchwithhook");

/**
 * hook で作成した検索コンポーネントのサンプル
 * @param props props
 */
export const SearchWithHook: React.StatelessComponent<ISearchWithHookProps> = (
	props: ISearchWithHookProps
) => {
	//配列やオブジェクトがなければスプレッド演算子でもよい
	const [condition, setCondition] = React.useState<ISearchWithHookCondition>(
		JSON.parse(JSON.stringify(initialCondition))
	);

	const handleChangeInput = (
		ev: React.ChangeEvent<HTMLInputElement>,
		isCheckbox: boolean = false
	) => {
		const { name, value } = ev.target;
		if (name in condition) {
			if (isCheckbox) {
				const currentValues = condition[name];
				if (!Array.isArray(currentValues)) {
					return;
				}
				const targetIndex = currentValues.indexOf(value);
				if (targetIndex === -1) {
					currentValues.push(value);
				} else {
					const removed = currentValues.splice(targetIndex, 1);
				}
				condition[name] = [...currentValues];
				setCondition({ ...condition });
			} else {
				condition[name] = value;
				setCondition({ ...condition });
			}
		}
	};

	const [pageObj, setPageobj] = React.useState<IPaging>(initialPageObj);

	const [records, setRecords] = React.useState<IRecord[]>([]);
	const handleSearch = async (ev: React.MouseEvent | null) => {
		console.log("search");
		//検索とか
		if (ssm.CanUseSS) {
			const stringCondition = JSON.stringify(condition);
			ssm.save(stringCondition);
		}
		const response = await HogeAPI.search2(condition, pageObj.page);
		const { data, ...rest } = response;
		setRecords(data);
		setPageobj(rest);
	};
	const handleReset = (ev: React.MouseEvent) => {
		setCondition(JSON.parse(JSON.stringify(initialCondition)));
	};
	const handleClickPage = async (ev: React.MouseEvent, page: number) => {
		const response = await HogeAPI.search2(condition, page);
		const { data, ...rest } = response;
		setRecords(data);
		setPageobj(rest);
	};

	//@todo ある select を変更すると、別の select が変わる、というような場合 xxxxxxxxxxx

	// 自動検索
	React.useEffect(() => {
		console.log("auto search once");
		if (ssm.CanUseSS) {
			console.log("restore condition from ss");
			const storedConditionString = ssm.restore();
			if (storedConditionString !== "") {
				const storedCondition: ISearchWithHookCondition = JSON.parse(
					storedConditionString
				);
				setCondition({ ...storedCondition });
			}
		}
		handleSearch(null);
	}, []);

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
