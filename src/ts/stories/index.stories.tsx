import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, object, withKnobs } from "@storybook/addon-knobs";
import { HogeButton, IHogeAttr } from "../lib/HogeButton";

const stories = storiesOf("First sample", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"component sample",
	() => {
		const groupid = "sample1";
		const name = text("Name", "ボタン名", groupid);
		const defaultAttr: IHogeAttr = {
			type: "button",
			cls: "sample-class",
		};
		const attr = object("obj_test", defaultAttr, groupid);
		const onClickHandler = (ev: React.MouseEvent) => {
			alert("hey");
		};
		return (
			<HogeButton
				str={name}
				attr={attr}
				onClickHandler={onClickHandler}
			/>
		);
	},
	{ info: { inline: true } }
);
