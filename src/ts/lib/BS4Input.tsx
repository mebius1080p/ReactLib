import * as React from "react";
import { TBS4Size } from "./InputDate";
import { IFakeEvent } from "./useBasicSearch";

type TTypeX = string | number;

interface IBS4InputProps<T> {
	type?: T extends number ? "number" : "text";
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
	onKeyDown?: (
		ev: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	size?: TBS4Size;
	extraClass?: string;
}

export function BS4Input<T extends TTypeX = string>(props: IBS4InputProps<T>) {
	const {
		type = "text",
		name,
		value,
		onChange,
		hasError = false,
		onKeyDown = (ev) => {},
		size = "sm",
		extraClass = "",
	} = props;

	const baseClass = "form-control";
	const sizeClass = size !== "" ? `form-control-${size}` : "";
	const errorClass = hasError ? " border border-danger" : "";
	const classString = `${baseClass} ${sizeClass} ${extraClass} ${errorClass}`;

	return (
		<input
			type={type}
			className={classString}
			name={name}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
}
