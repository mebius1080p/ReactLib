import * as Popper from "popper.js";
import * as React from "react";

export interface ReactDatePickerProps {
	adjustDateOnChange?: boolean;
	allowSameDay?: boolean;
	autoComplete?: string;
	autoFocus?: boolean;
	calendarClassName?: string;
	children?: React.ReactNode;
	className?: string;
	customInput?: React.ReactNode;
	customInputRef?: string;
	dateFormat?: string | string[];
	dateFormatCalendar?: string;
	dayClassName?(date: Date): string | null;
	disabled?: boolean;
	disabledKeyboardNavigation?: boolean;
	dropdownMode?: 'scroll' | 'select';
	endDate?: Date;
	excludeDates?: Date[];
	excludeTimes?: Date[];
	filterDate?(date: Date): boolean;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	formatWeekNumber?(date: Date): string | number;
	highlightDates?: Date[];
	id?: string;
	includeDates?: Date[];
	includeTimes?: Date[];
	inline?: boolean;
	isClearable?: boolean;
	locale?: string;
	maxDate?: Date;
	maxTime?: Date;
	minDate?: Date;
	minTime?: Date;
	monthsShown?: number;
	name?: string;
	onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
	onChange(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
	onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
	onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
	onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
	onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
	onMonthChange?(date: Date): void;
	onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
	onWeekSelect?(firstDayOfWeek: Date, weekNumber: string | number, event: React.SyntheticEvent<any> | undefined): void;
	onYearChange?(date: Date): void;
	openToDate?: Date;
	peekNextMonth?: boolean;
	placeholderText?: string;
	popperClassName?: string;
	popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
	popperModifiers?: Popper.Modifiers;
	popperPlacement?: string;
	preventOpenOnFocus?: boolean;
	readOnly?: boolean;
	required?: boolean;
	scrollableMonthYearDropdown?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: Date | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	shouldCloseOnSelect?: boolean;
	showDisabledMonthNavigation?: boolean;
	showMonthDropdown?: boolean;
	showMonthYearDropdown?: boolean;
	showTimeSelect?: boolean;
	showTimeSelectOnly?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: Date;
	startOpen?: boolean;
	tabIndex?: number;
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
	title?: string;
	todayButton?: string;
	useShortMonthInDropdown?: boolean;
	useWeekdaysShort?: boolean;
	utcOffset?: number;
	value?: string;
	weekLabel?: string;
	withPortal?: boolean;
	yearDropdownItemNumber?: number;
}
declare const ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
export default ReactDatePicker;
