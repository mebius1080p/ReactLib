import React from "react";
import { createRoot } from "react-dom/client";
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
		const root = createRoot(appElm);
		root.render(
			<React.StrictMode>
				<div className="container">
					<SearchWithHook />
				</div>
			</React.StrictMode>
		);
	},
	false
);
