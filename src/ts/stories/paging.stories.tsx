import * as React from "react";
import { storiesOf } from "@storybook/react";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IPaging, Paging2 } from "../lib/Paging2";

const stories = storiesOf("Paging2", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"トータル 10 ページ未満",
	() => {
		const groupid = "paging1";
		const defaultParams: IPaging = {
			totalcount: 48,
			page: 2,
			perpage: 20,
			totalpage: 3
		};
		const pagingParams = object("paging_params", defaultParams, groupid);
		return (
			<Paging2
				params={pagingParams}
				handleClickPage={action("paging_clicked")}
			/>
		);
	},
	{ info: { inline: true } }
);

stories.add(
	"トータル 10 ページ以上",
	() => {
		const groupid = "paging1";
		const defaultParams: IPaging = {
			totalcount: 148,
			page: 2,
			perpage: 10,
			totalpage: 15
		};
		const pagingParams = object("paging_params", defaultParams, groupid);
		return (
			<Paging2
				params={pagingParams}
				handleClickPage={action("paging_clicked")}
			/>
		);
	},
	{ info: { inline: true } }
);
