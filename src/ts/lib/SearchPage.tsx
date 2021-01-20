import * as React from "react";
import { AddNew } from "./AddNew";
import { IPaging, Paging2 } from "./Paging2";
import { SearchButtons } from "./SearchButtons";
import {
	IFakeEvent,
	TChangeableItemsFunction,
	TConditionValue,
	useBasicSearch,
} from "./useBasicSearch";

interface ISearchPageProps<C, R, E> {
	title: string;
	sskey: string;
	ConditionPanel: React.FunctionComponent<IConditionPanelProps<C, E>>;
	initialCondition: C;
	extraParam: E;
	searchFunction: (
		condition: C,
		page: number
	) => Promise<IPaging & { data: R[] }>;
	Listpanel: React.FunctionComponent<IListPanelProps<R>>;
	handleClickDetail: (ev: React.MouseEvent<HTMLButtonElement>) => void;
	makeChangeableItems?: TChangeableItemsFunction;
}

export interface IConditionPanelProps<C, E> {
	condition: C;
	extraParam: E;
	handleChangeInput: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent,
		isCheckbox?: boolean
	) => void;
	enterSearch: (
		ev: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

export interface IListPanelProps<R> {
	records: R[];
	handleClickDetail: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

//functional component に型引き数を渡すには、function で定義するのが肝！！！
export function SearchPage<C extends Record<string, TConditionValue>, R, E>(
	props: ISearchPageProps<C, R, E>
): React.ReactElement {
	const {
		title,
		sskey,
		ConditionPanel,
		initialCondition,
		Listpanel,
		extraParam,
		searchFunction,
		handleClickDetail,
		makeChangeableItems = (name: string) => {
			return [];
		},
	} = props;

	const {
		handleChangeInput,
		handleSearch,
		handleReset,
		handleClickPage,
		enterSearch,
		condition,
		pageObj,
		records,
	} = useBasicSearch<C, R>(
		sskey,
		initialCondition,
		searchFunction,
		makeChangeableItems
	);

	return (
		<div className="container">
			<div className="d-flex">
				<h4>
					<i className="fas fa-search" />
					{title}検索
				</h4>
				<AddNew handleClickDetail={handleClickDetail} />
			</div>
			<div className="card border-dark mb-3">
				<div className="card-header px-2 py-1 text-white bg-primary">
					<i className="fas fa-search" /> 検索部
				</div>
				<div className="card-body px-3 py-2 mb-3">
					<ConditionPanel
						condition={condition}
						extraParam={extraParam}
						handleChangeInput={handleChangeInput}
						enterSearch={enterSearch}
					/>
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
					<Listpanel
						records={records}
						handleClickDetail={handleClickDetail}
					/>
				</table>
			</div>
		</div>
	);
}
