import React from "react";
import ReactDOM from "react-dom";
import { SSManager } from "../lib/SSManager";
import { App } from "./App";
import { Nl2br } from "../lib/Nl2br";
import { PriceFormatter } from "../lib/PriceFormatter";

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

		const nl2brapp = document.getElementById("nl2brapp");
		if (nl2brapp === null) {
			throw new Error("app not found");
		}
		const multilineSample = `改行付き
		サンプル
		文章`;
		ReactDOM.render(
			<React.StrictMode>
				<div>
					<hr/>
					<Nl2br str={multilineSample} />
				</div>
			</React.StrictMode>,
			nl2brapp
		);

		const priceApp = document.getElementById("priceapp");
		if (priceApp === null) {
			throw new Error("app not found");
		}
		const prices = [100, 0, 1200, 52142255, -5000];
		ReactDOM.render(
			<React.StrictMode>
				<React.Fragment>
					<hr/>
					<div>数値にカンマを入れる。古めのデバイスはサポート外</div>
					<ul>
						{prices.map((p, index) => {
							return (
								<li key={index}>
									<PriceFormatter price={p} />
								</li>
							);
						})}
					</ul>
				</React.Fragment>
			</React.StrictMode>,
			priceApp
		);
	},
	false
);
