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
	let applyCondition: T = { ...initialCondition };
	if (ssm.CanUseSS) {
		const storedConditionString = ssm.restore();
		if (storedConditionString !== "") {
			const storedCondition: T = JSON.parse(storedConditionString);
			applyCondition = { ...storedCondition };
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
				condition[name] = [...currentValues];
				setCondition({ ...condition });
			} else {
				condition[name] = value;
				setCondition({ ...condition });
			}
		}
	};

	const [pageObj, setPageobj] = React.useState<IPaging>({
		...initialPageObj
	});

	const [records, setRecords] = React.useState<R[]>([]);
	const handleSearch = async (ev: React.MouseEvent | null) => {
		// 検索とか
		if (ssm.CanUseSS) {
			const stringCondition = JSON.stringify(condition);
			ssm.save(stringCondition);
		}
		try {
			const response = await searchFunction(condition, pageObj.page);
			const { data, ...rest } = response;
			setRecords(data);
			setPageobj(rest);
		} catch (error) {
			console.dir(error);
		}
	};
	const handleReset = (ev: React.MouseEvent) => {
		setCondition(JSON.parse(JSON.stringify(initialCondition)));
	};
	const handleClickPage = async (ev: React.MouseEvent, page: number) => {
		try {
			const response = await searchFunction(condition, page);
			const { data, ...rest } = response;
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
