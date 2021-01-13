import * as React from "react";
import { TStringNumber } from "./BS4Input";
import { TBS4Size } from "./InputDate";
import { IFakeEvent } from "./useBasicSearch";

export interface ISelectListItem<T> {
	name: string;
	value: T extends number ? number : string;
}

interface IBS4SelectProps<T> {
	name: string;
	value: T extends number ? number : string;
	hasError?: boolean;
	onChange: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => void;
	list: ISelectListItem<T>[];
	size?: TBS4Size;
	extraClass?: string;
}

export function BS4Select<T extends TStringNumber = number>(
	props: IBS4SelectProps<T>
) {
	const {
		name,
		value,
		onChange,
		list,
		hasError = false,
		size = "sm",
		extraClass = "",
	} = props;

	const baseClass = "form-control";
	const sizeClass = size !== "" ? `form-control-${size}` : "";
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
