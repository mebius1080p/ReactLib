import * as React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import format from "date-fns/format";
import ja from "date-fns/locale/ja";

(ja.options as any).weekStartsOn = 0; // 日曜から始まるようにする
registerLocale("ja", ja);

interface IInputDateProps {
	name: string;
	value: string; //yyyy-mm-dd など、new Date() して使用可能なもの
	handleChangeInput: (
		ev: React.SyntheticEvent<any, Event> | undefined,
		name: string,
		value: string
	) => void;
	size?: TBS4Size;
	extraClass?: string;
	dateFormat?: string;
}

type TBS4Size = "xs" | "sm" | "md" | "lg" | "xl" | "";

export const InputDate: React.StatelessComponent<IInputDateProps> = (
	props: IInputDateProps
) => {
	const {
		name,
		value,
		handleChangeInput,
		size = "",
		extraClass = "",
		dateFormat = "yyyy-MM-dd"
	} = props;

	let date: Date | null = null;
	if (value !== "") {
		date = new Date(value);
		if (date.toString() === "Invalid Date") {
			date = null;
		}
	}

	return (
		<DatePicker
			customInput={
				<InputDateComponent
					name={name}
					value={value}
					size={size}
					extraClass={extraClass}
				/>
			}
			selected={date}
			dateFormat={dateFormat}
			locale="ja"
			onChange={(date, event) => {
				let dateString = "";
				if (date !== null) {
					dateString = format(date, "yyyy-MM-dd");
				}
				handleChangeInput(event, name, dateString);
			}}
		/>
	);
};

interface IInputDateComponentProps {
	name: string;
	value: string; //yyyy-mm-dd など、new Date() して解析可能なもの
	size: TBS4Size;
	extraClass: string;
	onClick?: (
		dt: Date | null,
		event: React.SyntheticEvent<any, Event>
	) => void; // injected by react-datepicker
}

const InputDateComponent: React.StatelessComponent<IInputDateComponentProps> = (
	props: IInputDateComponentProps
) => {
	const {
		name,
		value,
		size = "",
		extraClass = "",
		onClick = (
			date: Date | null,
			ev: React.SyntheticEvent<any, Event>
		) => {}
	} = props;

	const inputClass =
		"form-control " +
		(size === "" ? "" : "form-control-" + size) +
		" " +
		extraClass;
	let date: Date | null = null;
	if (value !== "") {
		date = new Date(value);
		if (date.toString() === "Invalid Date") {
			date = null;
		}
	}

	return (
		<div className="input-group">
			<input
				type="text"
				name={name}
				className={inputClass}
				value={value}
				onChange={ev => {
					// 変更させない
				}}
				readOnly={true}
			/>
			<div className="input-group-append">
				<div
					className="input-group-text"
					onClick={ev => {
						onClick(date, ev);
					}}
				>
					<i className="fas fa-calendar-alt" />
				</div>
			</div>
		</div>
	);
};
