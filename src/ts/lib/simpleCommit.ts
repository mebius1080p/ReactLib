import { fetchJsonObjAsync, ISimpleFetchOption } from "../common";

export interface ICommittable {
	[str: string]: string | string[] | number | number[];
}
export async function simpleCommit(
	url: string,
	commitObj: ICommittable
): Promise<void> {
	const form = new FormData();
	for (const key in commitObj) {
		if (commitObj.hasOwnProperty(key)) {
			const element = commitObj[key];
			switch (typeof element) {
				case "string":
					form.append(key, element);
					break;
				case "number":
					form.append(key, element.toString());
					break;
				case "object":
					if (Array.isArray(element)) {
						form.append(key, JSON.stringify(element));
					}
					break;
				default:
					break;
			}
		}
	}
	const fetchParam: ISimpleFetchOption = {
		url,
		method: "POST",
		body: form
	};
	const response = await fetchJsonObjAsync<string[]>(fetchParam);
}
