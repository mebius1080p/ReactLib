import * as React from "react";
import { TBS4Size } from "./InputDate";

export type TStringNumber = string | number;

type inputProps = React.ComponentProps<"input">;

type TBS4InputProps<T> = {
	type?: T extends number ? "number" : "text";
	value: T extends number ? number : string;
	hasError?: boolean;
	formSize?: TBS4Size;
	extraClass?: string;
} & inputProps;

export function BS4Input<T extends TStringNumber = string>(
	props: TBS4InputProps<T>
) {
	const {
		type = "text",
		name,
		value,
		onChange,
		hasError = false,
		onKeyDown = (ev) => {},
		formSize = "sm",
		extraClass = "",
		step = 1,
		min = 0,
		max = undefined,
	} = props;

	const baseClass = "form-control";
	const sizeClass = formSize !== "" ? `form-control-${formSize}` : "";
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
			step={step}
			min={min}
			max={max}
		/>
	);
}
