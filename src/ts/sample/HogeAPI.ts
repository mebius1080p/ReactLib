import { IPaging } from "../lib/Paging2";
import { IRecord, ISearchWithHookCondition } from "./SearchWithHook";

export interface IAbc {
	dd: string;
}

export interface IConditionHoge {
	abc: string;
	from_x: string;
}

export class HogeAPI {
	public static async search(
		cond: IConditionHoge,
		page: number
	): Promise<IPaging & { data: IAbc[] }> {
		return {
			total: 0,
			page: 1,
			perpage: 1,
			totalpage: 1,
			data: [],
		};
	}
	/**
	 * search2 検索サンプルコンポーネント用
	 * @param cond 検索条件
	 * @param page 表示するページ
	 */
	public static async search2(
		cond: ISearchWithHookCondition,
		page: number
	): Promise<IPaging & { data: IRecord[] }> {
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
		};
	}
}
