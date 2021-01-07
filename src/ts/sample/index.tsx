import React from "react";
import ReactDOM from "react-dom";
import { SearchWithHook } from "./SearchWithHook";

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
				<div className="container">
					<SearchWithHook />
				</div>
			</React.StrictMode>,
			appElm
		);
	},
	false
);
