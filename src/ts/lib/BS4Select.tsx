import * as React from "react";
import { TStringNumber } from "./BS4Input";
import { TBS4Size } from "./InputDate";

export interface ISelectListItem<T> {
	name: string;
	value: T extends number ? number : string;
}

type inputProps = React.ComponentProps<"select">;

type TBS4SelectProps<T> = {
	value: T extends number ? number : string;
	hasError?: boolean;
	list: ISelectListItem<T>[];
	formSize?: TBS4Size;
	extraClass?: string;
} & inputProps;

export function BS4Select<T extends TStringNumber = number>(
	props: TBS4SelectProps<T>
) {
	const {
		name,
		value,
		onChange,
		list,
		hasError = false,
		formSize = "sm",
		extraClass = "",
	} = props;

	const baseClass = "form-control";
	const sizeClass = formSize !== "" ? `form-control-${formSize}` : "";
	const errorClass = hasError ? " border border-danger" : "";
	const classString = `${baseClass} ${sizeClass} ${extraClass} ${errorClass}`;

	return (
		<select
			name={name}
			value={value}
			className={classString}
			onChange={onChange}
		>
			{list.map((l, i) => {
				return (
					<option key={i} value={l.value}>
						{l.name}
					</option>
				);
			})}
		</select>
	);
}
