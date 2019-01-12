import * as React from "react";
import { IInjectedProps, IFakeEvent } from "../lib/createSearchComponent";
import { Paging } from "../lib/Paging";
import { IOther } from "./App";
import { InputDate } from "../lib/InputDate";

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

	const handleChangeInput = (
		ev: React.SyntheticEvent<any, Event> | undefined,
		name: string,
		value: string
	) => {
		const event: IFakeEvent = {
			target: {
				name,
				value
			}
		};
		onChangeInput(event);
	};

	return (
		<React.Fragment>
			<div>
				<div>search</div>
				<div>
					<InputDate
						name="from_x"
						value={condProps.from_x}
						handleChangeInput={handleChangeInput}
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
