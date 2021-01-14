import * as React from "react";
import { DetailPage } from "../lib/DetailPage";
import { IFakeEvent } from "../lib/useBasicSearch";
import {
	ISampleDetailInsideObj,
	ISampleExtraParam,
	SampleDetailInside,
} from "./SampleDetailInside";

interface ISampleAbstractDetailProps {}

const initialInputObj: ISampleDetailInsideObj = {
	hoge: "",
	xid: 0,
};

//外部から fetch してきたりして取得
const extraParam: ISampleExtraParam = {
	listx: [
		{
			name: "-",
			value: 0,
		},
		{
			name: "abc",
			value: 1,
		},
		{
			name: "xyz",
			value: 2,
		},
	],
};

export const SampleAbstractDetail: React.FunctionComponent<ISampleAbstractDetailProps> = (
	props: ISampleAbstractDetailProps
) => {
	const [inputObj, setInputObj] = React.useState<ISampleDetailInsideObj>(
		initialInputObj
	);

	const handleChangeInput = (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => {
		const { name, value } = ev.target;
		if (name in inputObj) {
			inputObj[name] = value;
			setInputObj({ ...inputObj });
		}
	};
	const simpleCommit = async () => {
		console.log("commit!");
	};
	const handleBack = () => {
		console.log("back!!!");
	};

	return (
		<DetailPage<ISampleDetailInsideObj, ISampleExtraParam>
			title="サンプル"
			InsideComponent={SampleDetailInside}
			inputObj={inputObj}
			extraParam={extraParam}
			handleChangeInput={handleChangeInput}
			simpleCommit={simpleCommit}
			handleBack={handleBack}
		/>
	);
};
