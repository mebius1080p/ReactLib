import * as React from "react";
import { IPaging } from "./Paging2";
import { SSManager } from "./SSManager";

export type TKeyValue = {
	[str: string]: string | string[] | number;
};
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

/**
 * 検索機能をまとめたカスタム hook
 * @param sskey session storage のキー
 * @param initialCondition 初期条件オブジェクト
 * @param searchFunction 検索関数
 */
export function useBasicSearch<T extends TKeyValue, R>(
	sskey: string,
	initialCondition: T,
	searchFunction: (
		condition: T,
		page: number
	) => Promise<IPaging & { data: R[] }>
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

	// 配列やオブジェクトがなければスプレッド演算子でもよい
	const [condition, setCondition] = React.useState<T>(
		JSON.parse(JSON.stringify({ ...applyCondition }))
	);

	const handleChangeInput = (
		ev:
			| React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
				const targetIndex = currentValues.indexOf(value);
				if (targetIndex === -1) {
					currentValues.push(value);
				} else {
					const removed = currentValues.splice(targetIndex, 1);
				}
				(condition as TKeyValue)[name] = [...currentValues];
				setCondition({ ...condition });
			} else {
				(condition as TKeyValue)[name] = value;
				setCondition({ ...condition });
			}
		}
	};

	const [pageObj, setPageobj] = React.useState<IPaging>(
		JSON.parse(JSON.stringify({ ...applyPageObj }))
	);

	const [records, setRecords] = React.useState<R[]>([]);
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

	// @todo ある select を変更すると、別の select が変わる、というような場合 xxxxxxxxxxx

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
