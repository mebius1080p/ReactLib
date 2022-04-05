import * as React from "react";
import { BS4Input } from "../lib/BS4Input";
import { BS4Select } from "../lib/BS4Select";
import { InputDate } from "../lib/InputDate";
import { IConditionPanelProps } from "../lib/SearchPage";
import { IFakeEvent } from "../lib/useBasicSearch";
import { IExtraParam, ISearchWithHookCondition } from "./SearchWithHook";

export const SamplePanel: React.FunctionComponent<
	IConditionPanelProps<ISearchWithHookCondition, any>
> = (props: IConditionPanelProps<ISearchWithHookCondition, IExtraParam>) => {
	const { condition, handleChangeInput, enterSearch, extraParam } = props;
	const { sampleList } = extraParam;

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
			<div className="form-inline">
				条件4 :{" "}
				<BS4Select
					name="cond3"
					list={sampleList}
					value={condition.cond3}
					onChange={handleChangeInput}
				/>
			</div>
			<div className="">
				条件5 :
				<InputDate
					name="condDate"
					value={condition.condDate}
					handleChangeInput={(ev, name, value) => {
						const event: IFakeEvent = {
							target: {
								name,
								value,
							},
						};
						handleChangeInput(event);
					}}
				/>
			</div>
		</div>
	);
};
