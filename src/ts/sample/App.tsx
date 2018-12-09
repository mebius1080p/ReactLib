import * as React from "react";
import { SSManager } from "../lib/SSManager";
import { IConditionHoge, Search, IAbc } from "./Search";
import { copySSCondition } from "../lib/copySSCondition";
import createSearchComponent from "../lib/createSearchComponent";
import { HogeAPI } from "./HogeAPI";

interface IAppProps {
	ssm: SSManager;
}

interface IAppState {
	dd: string;
}

export interface IOther {
	hoge: string[];
}

export class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
	}
	public render(): JSX.Element {
		const { ssm } = this.props;
		const initialCondition: IConditionHoge = {
			abc: "",
			from_x: ""
		};
		const other: IOther = {
			hoge: []
		};
		const savedCondition: IConditionHoge = JSON.parse(
			JSON.stringify(initialCondition)
		);
		copySSCondition<IConditionHoge>(ssm, savedCondition);
		const SearchApp = createSearchComponent<IConditionHoge, IAbc, IOther>(
			Search,
			initialCondition,
			savedCondition,
			HogeAPI.search,
			ssm,
			other
		);
		return <SearchApp />;
	}
}
