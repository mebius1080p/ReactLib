import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { InputDate } from "../lib/InputDate";

import "../../../www/sample/datepicker.css";
import "../../../www/sample/css/fontawesome_all.min.css";

const stories = storiesOf("InputDate", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"選択不可",
	() => {
		return (
			<InputDate
				name=""
				value=""
				handleChangeInput={action("date_change")}
			/>
		);
	},
	{ info: { inline: true } }
);

stories.add(
	"選択可能",
	() => {
		return <SelectableDateInput />;
	},
	{ info: { inline: true } }
);

interface ISelectableDateInputProps {}

const SelectableDateInput: React.StatelessComponent<
	ISelectableDateInputProps
> = (props: ISelectableDateInputProps) => {
	const [value, setValue] = React.useState<string>("");

	const handleChangeInput = (
		ev: React.SyntheticEvent<any, Event> | undefined,
		name: string,
		selectedValue: string
	) => {
		setValue(selectedValue);
	};

	return (
		<InputDate
			name=""
			value={value}
			handleChangeInput={handleChangeInput}
		/>
	);
};
