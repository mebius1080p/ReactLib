import { IPaging } from "../lib/Paging2";
import { IAbc, IConditionHoge } from "./Search";

export class HogeAPI {
	public static async search(
		cond: IConditionHoge,
		page: number
	): Promise<IPaging & { data: IAbc[] }> {
		return {
			totalcount: 0,
			page: 1,
			perpage: 1,
			totalpage: 1,
			data: []
		};
	}
}
