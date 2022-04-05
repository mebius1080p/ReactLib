import * as React from "react";
import { BS4Input } from "../lib/BS4Input";
import { BS4Select, ISelectListItem } from "../lib/BS4Select";
import { IInsideComponentProps } from "../lib/DetailPage";

export interface ISampleDetailInsideObj {
	hoge: string;
	xid: number;
	[key: string]: string | number;
}

export interface ISampleExtraParam {
	listx: ISelectListItem<number>[];
}

export const SampleDetailInside: React.FunctionComponent<IInsideComponentProps<
	ISampleDetailInsideObj,
	ISampleExtraParam
>> = (
	props: IInsideComponentProps<ISampleDetailInsideObj, ISampleExtraParam>
) => {
	const { inputObj, inputError, extraParam, handleChangeInput } = props;
	const { listx } = extraParam;

	return (
		<tbody>
			<tr>
				<td>sample1</td>
				<td>
					<BS4Input
						name="hoge"
						value={inputObj.hoge}
						onChange={handleChangeInput}
						formSize="sm"
						hasError={"hoge" in inputError}
					/>
				</td>
			</tr>
			<tr>
				<td>sample2</td>
				<td>
					<BS4Select
						name="xid"
						value={inputObj.xid}
						onChange={handleChangeInput}
						hasError={"xid" in inputError}
						list={listx}
					/>
				</td>
			</tr>
		</tbody>
	);
};
