import { fetchJsonObjAsync, ISimpleFetchOption } from "../common";
import { IPaging } from "./Paging2";
import { TConditionValue } from "./useBasicSearch";

/**
 * チェックボックスなどを使用しない、シンプルな検索フォーム用の検索関数作成関数
 * @param url 検索先 url
 */
export function createSearchFunction(url: string) {
	const searchFunc = async <
		T extends Record<string, TConditionValue>,
		R
	>(
		condition: T,
		page: number
	): Promise<IPaging & { data: R[] }> => {
		const form = new FormData();
		for (const key in condition) {
			if (condition.hasOwnProperty(key)) {
				const value = condition[key];
				switch (true) {
					case Array.isArray(value):
						form.append(key, JSON.stringify(value));
						break;
					case typeof value === "string":
						form.append(key, value as string);
						break;
					case typeof value === "number":
						form.append(key, value.toString());
						break;
				}
			}
		}
		form.append("page", page.toString());
		const fetchOption: ISimpleFetchOption = {
			url,
			method: "POST",
			body: form
		};
		const response = await fetchJsonObjAsync<IPaging & { data: R[] }>(
			fetchOption
		);
		return response.data;
	};
	return searchFunc;
}
