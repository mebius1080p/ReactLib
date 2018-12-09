import React from "react";
import ReactDOM from "react-dom";
import { SSManager } from "../lib/SSManager";
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
		const ssm = new SSManager("sssss");
		ReactDOM.render(
			<React.StrictMode>
				<App ssm={ssm} />
			</React.StrictMode>,
			appElm
		);
	},
	false
);
