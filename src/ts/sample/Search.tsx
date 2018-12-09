import * as React from "react";
import DatePicker from "react-datepicker";
import { IInjectedProps, IFakeEvent } from "../lib/createSearchComponent";
import { Paging } from "../lib/Paging";
import { createWrappedDatePicker } from "../lib/createWrappedDatePicker";
import { DatePickerWrapper } from "../lib/DatePickerWrapper";
import Moment from "moment";
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
	const onChangeDate = (ev: Moment.Moment | null, tag: string) => {
		if (ev !== null) {
			const evt: IFakeEvent = {
				target: {
					name: tag,
					value: ev.format("YYYY-MM-DD")
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
						dateFormat="YYYY-MM-DD"
						selected={
							condProps.from_x === ""
								? null
								: Moment(condProps.from_x)
						}
						name="from_x"
						onChange={ev => {
							onChangeDate(ev, "from_x");
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
