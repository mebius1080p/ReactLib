import * as React from "react";
import DatePicker from "react-datepicker";
import { IInjectedProps, IFakeEvent } from "../lib/createSearchComponent";
import { Paging } from "../lib/Paging";
import { createWrappedDatePicker } from "../lib/createWrappedDatePicker";
import { DatePickerWrapper } from "../lib/DatePickerWrapper";
import { IOther } from "./App";

export interface IAbc {
	dd: string;
}

export interface IConditionHoge {
	abc: string;
	from_x: string;
}

interface ISearchProps extends IInjectedProps<IConditionHoge, IOther> {
	condProps: IConditionHoge;
	recordProps: IAbc[]; // xxx
	otherProps: IOther;
	onClickAdd: (ev: React.MouseEvent) => void;
	onClickDetail: (ev: React.MouseEvent) => void;
}

export const Search: React.StatelessComponent<ISearchProps> = (
	props: ISearchProps
) => {
	const {
		onClickSearch,
		onClickReset,
		condProps,
		recordProps,
		pageProps,
		onChangeInput,
		onClickPaging,
		onClickAdd,
		onClickDetail
	} = props;
	const WrappedDatePicker = createWrappedDatePicker(DatePickerWrapper);
	const onChangeDate = (ev: Date | null, tag: string) => {
		if (ev !== null) {
			const dateString = `${ev.getFullYear()}-${ev.getMonth() +
				1}-${ev.getDate()}`;
			const evt: IFakeEvent = {
				target: {
					name: tag,
					value: dateString
				}
			};
			onChangeInput(evt);
		}
	};
	return (
		<React.Fragment>
			<div>
				<div>search</div>
				<div>
					<DatePicker
						customInput={<WrappedDatePicker />}
						dateFormat="YYYY-MM-dd"
						selected={
							condProps.from_x === ""
								? null
								: new Date(condProps.from_x)
						}
						name="from_x"
						onChange={(date: Date) => {
							onChangeDate(date, "from_x");
						}}
					/>
				</div>
			</div>
			<Paging paging={pageProps} onClickPage={onClickPaging} />
			<table>
				<tbody>
					<tr>
						<td>aa</td>
						<td>bb</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	);
};
