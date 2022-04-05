import * as React from "react";
import { HogeAPI } from "./HogeAPI";
import { Paging2 } from "../lib/Paging2";
import {
	useBasicSearch,
	TConditionValue,
	IFakeEvent,
} from "../lib/useBasicSearch";
import { SearchButtons } from "../lib/SearchButtons";
import { DetailPageButtons } from "../lib/DetailPageButtons";
import { AddNew } from "../lib/AddNew";
import { SearchPage } from "../lib/SearchPage";
import { SamplePanel } from "./SamplePanel";
import { SampleList } from "./SampleList";
import { ISelectListItem } from "../lib/BS4Select";
import { BS4Textarea } from "../lib/BS4Textarea";

interface ISearchWithHookProps {}

export interface ISearchWithHookCondition
	extends Record<string, TConditionValue> {
	cond1: string;
	cond2: number;
	cond3: number;
	forcheck: number[];
	condDate: string;
}

export interface IRecord extends Record<string, string> {
	hoge: string;
	fuga: string;
}

const initialCondition: ISearchWithHookCondition = {
	cond1: "",
	cond2: 0,
	cond3: 0,
	forcheck: [],
	condDate: "",
};

const sampleList: ISelectListItem<number>[] = [
	{
		name: "-",
		value: 0,
	},
	{
		name: "hoge",
		value: 1,
	},
	{
		name: "fuga",
		value: 2,
	},
	{
		name: "piyo",
		value: 3,
	},
];

export interface IExtraParam {
	sampleList: ISelectListItem<number>[];
}

/**
 * hook で作成した検索コンポーネントのサンプル
 * @param props props
 */
export const SearchWithHook: React.FunctionComponent<ISearchWithHookProps> = (
	props: ISearchWithHookProps
) => {
	const {
		handleChangeInput,
		handleSearch,
		handleReset,
		handleClickPage,
		enterSearch,
		condition,
		pageObj,
		records,
	} = useBasicSearch<ISearchWithHookCondition, IRecord>(
		"searchwithhook",
		initialCondition,
		HogeAPI.search2
	);

	const [textareaString, setTextarea] = React.useState("");
	const handleTextarea = (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => {
		setTextarea(ev.target.value);
	};

	const handleBack = () => {
		console.log("back!");
	};
	const handleCommit = () => {
		console.log("commit!");
	};
	const handleClickDetail = (ev: React.MouseEvent<HTMLButtonElement>) => {
		console.log("detail!");
	};

	return (
		<div>
			<div className="d-flex">
				<h4>
					<i className="fas fa-search" />
					xxx検索
				</h4>
				<AddNew handleClickDetail={handleClickDetail} />
			</div>
			<div className="card border-dark mb-3">
				<div className="card-header px-2 py-1 text-white bg-primary">
					<i className="fas fa-search" /> 検索部
				</div>
				<div className="card-body px-3 py-2 mb-3">
					<div className="form-inline">
						条件1 :{" "}
						<input
							type="text"
							name="cond1"
							value={condition.cond1}
							onChange={handleChangeInput}
							onKeyDown={enterSearch}
							className="form-control form-control-sm"
						/>
					</div>
					<div className="form-inline">
						条件2 :{" "}
						<input
							type="text"
							name="cond2"
							value={condition.cond2}
							onChange={handleChangeInput}
							onKeyDown={enterSearch}
							className="form-control form-control-sm"
						/>
					</div>
					<div>
						条件3 :{" "}
						<input
							type="checkbox"
							name="forcheck"
							value="1"
							checked={condition.forcheck.some((c) => {
								return c === 1;
							})}
							onChange={(ev) => {
								handleChangeInput(ev, true);
							}}
						/>
						ABC
						<input
							type="checkbox"
							name="forcheck"
							value="2"
							checked={condition.forcheck.some((c) => {
								return c === 2;
							})}
							onChange={(ev) => {
								handleChangeInput(ev, true);
							}}
						/>
						XYZ
					</div>
					<SearchButtons
						handleReset={handleReset}
						handleSearch={handleSearch}
					/>
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
			<div>
				<DetailPageButtons
					handleBack={handleBack}
					handleCommit={handleCommit}
				/>
			</div>
			<div>
				<SearchPage<ISearchWithHookCondition, IRecord, IExtraParam>
					title="サンプル"
					sskey="sample/search"
					ConditionPanel={SamplePanel}
					initialCondition={initialCondition}
					extraParam={{ sampleList }}
					searchFunction={HogeAPI.search2}
					Listpanel={SampleList}
					handleClickDetail={() => {
						console.log("detail!");
					}}
				/>
			</div>
			<div>
				<BS4Textarea
					name="hoge"
					value={textareaString}
					onChange={handleTextarea}
				/>
			</div>
		</div>
	);
};
