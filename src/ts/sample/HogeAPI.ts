import { IPaging } from "../lib/Paging2";
import { IOrderBy, TConditionValue } from "../lib/useBasicSearch";
import { IRecord, ISearchWithHookCondition } from "./SearchWithHook";

export interface IAbc {
	dd: string;
}

export interface IConditionHoge extends Record<string, TConditionValue> {
	abc: string;
	from_x: string;
}

export class HogeAPI {
	public static async search(
		cond: IConditionHoge,
		page: number,
		orderObj: IOrderBy
	): Promise<IPaging & { data: IAbc[] } & IOrderBy> {
		return {
			total: 0,
			page: 1,
			perpage: 1,
			totalpage: 1,
			data: [],
			column: "",
			order: "ASC",
		};
	}
	/**
	 * search2 検索サンプルコンポーネント用
	 * @param cond 検索条件
	 * @param page 表示するページ
	 */
	public static async search2(
		cond: ISearchWithHookCondition,
		page: number,
		orderObj: IOrderBy
	): Promise<IPaging & { data: IRecord[] } & IOrderBy> {
		console.log("request search!");
		console.log(page);
		const data = [
			{
				hoge: "aa",
				fuga: "AA",
			},
			{
				hoge: "bb",
				fuga: "BB",
			},
			{
				hoge: "cc",
				fuga: "CC",
			},
			{
				hoge: "dd",
				fuga: "DD",
			},
		];
		return {
			total: 10,
			page: 1,
			perpage: 4,
			totalpage: 3,
			data,
			column: "",
			order: "ASC",
		};
	}
}
