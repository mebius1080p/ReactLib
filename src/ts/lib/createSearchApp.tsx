import React from "react";

export interface IInjectedProps {
	onClickSearch: (ev) => void;
	onClickReset: (ev) => void;
	onClickPaging: (ev) => void;
	paging: IPaging;
}

interface IPage {
	page: number;
}

interface IPaging {
	total: number;
	page: number;
	perpage: number;
	totalpage: number;
}

export function createSearchApp<T, S>(
	WrappedComponent: React.ComponentType<
		IInjectedProps & { condition: T; records: S[] }
	>,
	resetCond: T,
	initialCond: T,
	searchAPI: (cond: T & IPage) => Promise<IPaging & { data: S[] }>
) {
	interface IHOCState {
		condition: T;
		paging: IPaging;
		records: S[];
	}
	return class extends React.Component<any, IHOCState> {
		constructor(props: any) {
			super(props);
			this.state = {
				condition: initialCond,
				paging: { total: 0, page: 0, perpage: 0, totalpage: 0 },
				records: []
			};
		}
		private async search(): Promise<void> {
			try {
				const { condition, paging } = this.state;
				const merged = Object.assign({}, condition, paging);
				const result = await searchAPI(merged);
				this.setState({ records: result.data });
			} catch (error) {
				console.dir(error);
			}
		}
		/**
		 * handleClickSearch
		 */
		public handleClickSearch(_ev): void {
			this.search();
		}
		/**
		 * handleClickReset
		 */
		public handleClickReset(_ev): void {
			const resetClone = JSON.stringify(resetCond);
			this.setState({ condition: JSON.parse(resetClone) });
		}
		/**
		 * handleClickPaging
		 */
		public handleClickPaging(_ev): void {
			// dd;
		}
		/**
		 * render
		 */
		public render(): JSX.Element {
			const { condition, records, paging } = this.state;
			return (
				<WrappedComponent
					{...this.props}
					onClickSearch={this.handleClickSearch}
					onClickReset={this.handleClickReset}
					onClickPaging={this.handleClickPaging}
					condition={condition}
					records={records}
					paging={paging}
				/>
			);
		}
	};
}
