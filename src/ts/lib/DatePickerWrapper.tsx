import * as React from "react";
import { IInjectedProps } from "./createWrappedDatePicker";

export const DatePickerWrapper: React.StatelessComponent<IInjectedProps> = (
	props: IInjectedProps
) => {
	const { name, value, onClick, extraClass = "" } = props;
	return (
		<div className="input-group" style={{ width: "12em" }}>
			<input
				type="text"
				name={name}
				className={"form-control form-control-sm calendar-input hasDatepicker " + extraClass}
				value={value}
				onChange={ev => {
					// 変更させない
				}}
				readOnly={true}
			/>
			<div className="input-group-append">
				<div className="input-group-text" onClick={onClick}>
					<i className="fas fa-calendar-alt" />
				</div>
			</div>
		</div>
	);
};
