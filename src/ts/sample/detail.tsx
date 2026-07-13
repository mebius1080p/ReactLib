import * as React from "react";
import { createRoot } from "react-dom/client";
import { SampleAbstractDetail } from "./SampleAbstractDetail";

("use strict");
document.addEventListener(
	"DOMContentLoaded",
	() => {
		console.log("here");
		const appElm = document.getElementById("app");
		if (appElm === null) {
			throw new Error("app element not found");
		}
		const root = createRoot(appElm);
		root.render(
			<React.StrictMode>
				<SampleAbstractDetail />
			</React.StrictMode>,
		);
	},
	false,
);
