import * as React from "react";
import { IPaging } from "./Paging2";
import { SSManager } from "./SSManager";

export type TConditionValue = string | number | number[];

export interface IFakeEvent {
	target: {
		name: string;
		value: string;
	};
}

const initialPageObj: IPaging = {
	total: 0,
	page: 1,
	perpage: 10,
	totalpage: 1
};

interface IPageForSS {
	page: number;
}

interface IChangeableItem {
	name: string;
	value: TConditionValue;
}

type TChangeableItemsFunction = (name: string) => IChangeableItem[];

/**
 * 検索機能をまとめたカスタム hook
 * チェックボックス系の value は数値配列であると見なす……
 * @param sskey session storage のキー
 * @param initialCondition 初期条件オブジェクト
 * @param searchFunction 検索関数
 * @param makeChangeableItems ある select を変更すると、別の select が変わる、というような場合のための関数
 */
export function useBasicSearch<T extends Record<string, TConditionValue>, R>(
	sskey: string,
	initialCondition: T,
	searchFunction: (
		condition: T,
		page: number
	) => Promise<IPaging & { data: R[] }>,
	makeChangeableItems: TChangeableItemsFunction = (name: string) => {
		return [];
	}
) {
	const ssm = new SSManager(sskey);
	const ssmPage = new SSManager(sskey + "_page");
	let applyCondition: T = { ...initialCondition };
	const applyPageObj: IPaging = { ...initialPageObj };
	if (ssm.CanUseSS) {
		const storedConditionString = ssm.restore();
		if (storedConditionString !== "") {
			const storedCondition: T = JSON.parse(storedConditionString);
			applyCondition = { ...storedCondition };
		}
		const storedPageString = ssmPage.restore();
		if (storedPageString !== "") {
			const storedPage: IPageForSS = JSON.parse(storedPageString);
			applyPageObj.page = storedPage.page;
		}
	}

	// hook
	// リセットがあるのでクローンしてから設定
	const [condition, setCondition] = React.useState<T>(
		JSON.parse(JSON.stringify({ ...applyCondition }))
	);
	const [pageObj, setPageobj] = React.useState<IPaging>(
		JSON.parse(JSON.stringify({ ...applyPageObj }))
	);
	const [records, setRecords] = React.useState<R[]>([]);

	// handler
	const handleChangeInput = (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent,
		isCheckbox: boolean = false
	) => {
		const { name, value } = ev.target;
		if (name in condition) {
			if (isCheckbox) {
				const currentValues = condition[name];
				if (!Array.isArray(currentValues)) {
					return;
				}
				// string[] も認めるとなると、currentValues.length === 0 のときにどちらにすべきか決定できなくなる……
				// handleChangeInput の引数でどちらの方なのかを指定する方法もあり
				const numValue = Number(value);
				if (isNaN(numValue)) {
					return;
				}
				const targetIndex = currentValues.indexOf(numValue);
				if (targetIndex === -1) {
					currentValues.push(numValue);
				} else {
					const removed = currentValues.splice(targetIndex, 1);
				}
				(condition as Record<string, number[]>)[name] = [
					...currentValues
				];
				const changeableItems = makeChangeableItems(name);
				changeableItems.forEach(item => {
					if (item.name in condition) {
						// 型は一致していると見なすので makeChangeableItems は注意して実装する
						(condition[item.name] as TConditionValue) = item.value;
					}
				});
				setCondition({ ...condition });
			} else {
				const currentValue = condition[name];
				switch (typeof currentValue) {
					case "string":
						(condition as Record<string, string>)[name] = value;
						break;
					case "number":
						const numValue = Number(value);
						if (isNaN(numValue)) {
							break;
						}
						(condition as Record<string, number>)[name] = numValue;
						break;
				}
				const changeableItems = makeChangeableItems(name);
				changeableItems.forEach(item => {
					if (item.name in condition) {
						// 型は一致していると見なすので makeChangeableItems は注意して実装する
						(condition[item.name] as TConditionValue) = item.value;
					}
				});
				setCondition({ ...condition });
			}
		}
	};
	const handleSearch = async (ev: React.MouseEvent | null) => {
		// 検索とか
		if (ssm.CanUseSS) {
			const stringCondition = JSON.stringify(condition);
			ssm.save(stringCondition);
		}
		searchFunctionEntity(condition, pageObj.page);
	};
	const handleReset = (ev: React.MouseEvent) => {
		setCondition(JSON.parse(JSON.stringify(initialCondition)));
	};
	const handleClickPage = async (ev: React.MouseEvent, page: number) => {
		searchFunctionEntity(condition, page);
	};

	const searchFunctionEntity = async (searchCondition: T, page: number) => {
		try {
			const response = await searchFunction(searchCondition, page);
			const { data, ...rest } = response;
			if (ssmPage.CanUseSS) {
				// ページ数に関してはサーバーからのレスポンスが正しいので、これを保存
				const pageForSS: IPageForSS = {
					page: rest.page
				};
				ssmPage.save(JSON.stringify(pageForSS));
			}
			setRecords(data);
			setPageobj(rest);
		} catch (error) {
			console.dir(error);
		}
	};

	// 自動検索
	React.useEffect(() => {
		handleSearch(null);
	}, []);

	return {
		handleChangeInput,
		handleSearch,
		handleReset,
		handleClickPage,
		condition,
		pageObj,
		records
	};
}
