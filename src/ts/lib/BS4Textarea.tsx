import * as React from "react";
import { IFakeEvent } from "./useBasicSearch";

interface IBS4TextareaProps {
	name: string;
	value: string;
	hasError?: boolean;
	onChange: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => void;
	onKeyDown?: (
		ev: React.KeyboardEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => void;
	extraClass?: string;
}

export const BS4Textarea: React.FunctionComponent<IBS4TextareaProps> = (
	props: IBS4TextareaProps
) => {
	const {
		name,
		value,
		onChange,
		hasError = false,
		onKeyDown = (ev) => {},
		extraClass = "",
	} = props;

	const baseClass = "form-control";
	const errorClass = hasError ? " border border-danger" : "";
	const classString = `${baseClass} ${extraClass} ${errorClass}`;

	return (
		<textarea
			name={name}
			value={value}
			className={classString}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};
