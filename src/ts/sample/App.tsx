import * as React from "react";
import { SearchWithHook } from "./SearchWithHook";

interface IAppProps {
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
		return <SearchWithHook />;
	}
}
