import * as React from "react";

type inputProps = React.ComponentProps<"textarea">;

type TBS4TextareaProps = {
	hasError?: boolean;
	extraClass?: string;
} & inputProps;

export const BS4Textarea: React.FunctionComponent<TBS4TextareaProps> = (
	props: TBS4TextareaProps
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
