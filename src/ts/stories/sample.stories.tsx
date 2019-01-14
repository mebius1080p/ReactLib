import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number, text, boolean, withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Storybook Knobs", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add(
	"with a button",
	() => {
		const groupId1 = "GROUP-ID0";
		return (
			<button
				disabled={boolean("Disabled", false, groupId1)}
				name="hogebtn"
			>
				{text("Label", "Hello Storybook", groupId1)}
			</button>
		);
	},
	{ info: { inline: true } }
);

stories.add("as dynamic variables", () => {
	const groupId1 = "GROUP-ID1";
	// const groupId2 = "GROUP-ID2";
	const name = text("Name", "Mike Davis", groupId1);
	const age = number("Age", 89, undefined, groupId1);

	const content = `I am ${name} and I'm ${age} years old.`;
	return <div>{content}</div>;
});
