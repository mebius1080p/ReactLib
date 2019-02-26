import * as React from "react";
import { IPaging } from "./Paging2";
import { SSManager } from "./SSManager";

type TKeyValue = {
	[str: string]: string | string[];
};

const initialPageObj: IPaging = {
	totalcount: 0,
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
	//配列やオブジェクトがなければスプレッド演算子でもよい
	const [condition, setCondition] = React.useState<T>(
		JSON.parse(JSON.stringify(initialCondition))
	);

	const handleChangeInput = (
		ev: React.ChangeEvent<HTMLInputElement>,
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
		//検索とか
		if (ssm.CanUseSS) {
			const stringCondition = JSON.stringify(condition);
			ssm.save(stringCondition);
		}
		const response = await searchFunction(condition, pageObj.page);
		const { data, ...rest } = response;
		setRecords(data);
		setPageobj(rest);
	};
	const handleReset = (ev: React.MouseEvent) => {
		setCondition(JSON.parse(JSON.stringify(initialCondition)));
	};
	const handleClickPage = async (ev: React.MouseEvent, page: number) => {
		const response = await searchFunction(condition, page);
		const { data, ...rest } = response;
		setRecords(data);
		setPageobj(rest);
	};

	//@todo ある select を変更すると、別の select が変わる、というような場合 xxxxxxxxxxx

	// 自動検索
	React.useEffect(() => {
		if (ssm.CanUseSS) {
			const storedConditionString = ssm.restore();
			if (storedConditionString !== "") {
				const storedCondition: T = JSON.parse(storedConditionString);
				setCondition({ ...storedCondition });
			}
		}
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
