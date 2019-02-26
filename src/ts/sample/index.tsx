import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

"use strict";
document.addEventListener(
	"DOMContentLoaded",
	() => {
		console.log("here");
		const appElm = document.getElementById("app");
		if (appElm === null) {
			throw new Error("app not found");
		}
		ReactDOM.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
			appElm
		);
	},
	false
);
