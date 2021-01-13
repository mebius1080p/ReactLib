import * as React from "react";
import { BS4Input } from "../lib/BS4Input";
import { IConditionPanelProps } from "../lib/SearchPage";
import { ISearchWithHookCondition } from "./SearchWithHook";

export const SamplePanel: React.FunctionComponent<IConditionPanelProps<
	ISearchWithHookCondition,
	any
>> = (props: IConditionPanelProps<ISearchWithHookCondition, any>) => {
	const { condition, handleChangeInput, enterSearch } = props;

	return (
		<div>
			<div className="form-inline">
				条件1 :{" "}
				<BS4Input
					name="cond1"
					value={condition.cond1}
					onChange={handleChangeInput}
					onKeyDown={enterSearch}
				/>
			</div>
			<div className="form-inline">
				条件2 :{" "}
				<BS4Input<number>
					type="number"
					name="cond2"
					value={condition.cond2}
					onChange={handleChangeInput}
					onKeyDown={enterSearch}
				/>
			</div>
			<div>
				条件3 :{" "}
				<input
					type="checkbox"
					name="forcheck"
					value="1"
					checked={condition.forcheck.some((c) => {
						return c === 1;
					})}
					onChange={(ev) => {
						handleChangeInput(ev, true);
					}}
				/>
				ABC
				<input
					type="checkbox"
					name="forcheck"
					value="2"
					checked={condition.forcheck.some((c) => {
						return c === 2;
					})}
					onChange={(ev) => {
						handleChangeInput(ev, true);
					}}
				/>
				XYZ
			</div>
		</div>
	);
};