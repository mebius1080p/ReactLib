// import { addParameters } from "@storybook/client-api";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

//@TODO ドキュメントが表示されない……

addParameters({
	docs: {
		extractComponentDescription: (component, { notes }) => {
			if (notes) {
				return typeof notes === "string"
					? notes
					: notes.markdown || notes.text;
			}
			return null;
		},
		container: DocsContainer,
		page: DocsPage,
	},
});
