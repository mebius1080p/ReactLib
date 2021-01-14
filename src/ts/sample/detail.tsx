import * as React from "react";
import * as ReactDOM from "react-dom";
import { SampleAbstractDetail } from "./SampleAbstractDetail";

"use strict";
document.addEventListener(
	"DOMContentLoaded",
	() => {
		console.log("here");
		const appElm = document.getElementById("app");
		if (appElm === null) {
			throw new Error("app element not found");
		}
		ReactDOM.render(
			<React.StrictMode>
				<SampleAbstractDetail />
			</React.StrictMode>,
			appElm
		);
	},
	false
);
