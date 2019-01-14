import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number, text, boolean, withKnobs } from "@storybook/addon-knobs";
import { HogeButton } from "../lib/HogeButton";

const stories = storiesOf("First sample", module);

stories.add(
	"simple div",
	() => {
		const name = text("Name", "ボタン名");
		return <HogeButton str={name} />;
	},
	{ info: { inline: true } }
);
