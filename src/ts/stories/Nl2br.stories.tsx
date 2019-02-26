import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import "../../../www/sample/datepicker.css";
import "../../../www/sample/css/fontawesome_all.min.css";
import { Nl2br } from "../lib/Nl2br";

const stories = storiesOf("Nl2br", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"サンプル1",
	() => {
		const groupId1 = "nl2br1";
		const templateString = `サンプル文字列
改行付き`;
		const string = text("string", templateString, groupId1);
		return (
			<Nl2br str={string} />
		);
	},
	{ info: { inline: true } }
);