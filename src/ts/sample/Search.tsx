import * as React from "react";
import { IInjectedProps, IFakeEvent } from "../lib/createSearchComponent";
import { IOther } from "./App";
import { InputDate } from "../lib/InputDate";
import { Paging2 } from "../lib/Paging2";

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
/**
 * サンプルとして残しておく
 * @deprecated
 * @param props props
 */
export const Search: React.FunctionComponent<ISearchProps> = (
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
			<Paging2 params={pageProps} handleClickPage={onClickPaging} />
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
