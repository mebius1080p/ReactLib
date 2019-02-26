import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import "../../../www/sample/datepicker.css";
import "../../../www/sample/css/fontawesome_all.min.css";
import { PriceFormatter } from "../lib/PriceFormatter";

const stories = storiesOf("PriceFormatter", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"サンプル1",
	() => {
		const groupId1 = "priceformatter1";
		const initialPrice = 1000;
		const num = number("string", initialPrice, {}, groupId1);
		return <PriceFormatter price={num} />;
	},
	{ info: { inline: true } }
);
