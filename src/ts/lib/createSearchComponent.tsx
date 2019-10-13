import * as React from "react";
import { IPaging } from "./Paging2";
import { objAssign } from "./objAssign";
import { SSManager } from "./SSManager";

export interface IInjectedProps<T, U = {}> {
	onClickPaging: (ev: React.MouseEvent, page: number) => void;
	onClickSearch: (ev: React.MouseEvent) => void;
	onClickReset: (ev: React.MouseEvent) => void;
	onChangeInput: (
		ev: React.ChangeEvent | IFakeEvent,
		isCheck?: boolean,
		values?: string[]
	) => void;
	onUpdateOnce: (condition: T, other: U) => void;
	onChangeOther: (other: U) => void;
	pageProps: IPaging;
}

export interface IPageCondition {
	page: number;
}

export interface IFakeEvent {
	target: IFakeTarget;
}

interface IFakeTarget {
	name: any;
	value: any;
}

type TCondition = {
	[str: string]: any;
};

/**
 * 一覧検索用コンポーネントを作って返す HOC 関数
 * @deprecated 参考までにとっておく
 * @param WrappedComponent 中に通すコンポーネント
 * @param initialCondition 条件リセット時に設定する条件オブジェクト
 * @param savedCondition ls などに保存しておいた条件オブジェクト
 * @param searchAPI 検索 api 関数
 * @param ssm セッションストレージマネージャー オプション扱い
 * @param other 検索条件ではないが、追加のオブジェクトなど (select に使うリストなど)
 */
export default function createSearchComponent<T extends TCondition, S, U = {}>(
	WrappedComponent: React.ComponentType<
		IInjectedProps<T, U> & {
			condProps: T;
			recordProps: S[];
			otherProps?: U;
		} & any
	>,
	initialCondition: T,
	savedCondition: T,
	searchAPI: (cond: T, page: number) => Promise<IPaging & { data: S[] }>,
	ssm: SSManager | null = null,
	other?: U
) {
	objAssign();
	return class extends React.Component<
		any,
		{
			paging: IPaging;
			condition: T;
			records: S[];
			other?: U;
		}
	> {
		constructor(props: any) {
			super(props);
			// T は中身が階層化していない型であること
			this.state = {
				paging: {
					total: 0,
					page: 1,
					perpage: 20,
					totalpage: 1
				},
				condition: Object.assign(
					JSON.parse(JSON.stringify(savedCondition)),
					{
						page: 1
					}
				),
				records: [],
				other
			};
			this.handlePaging = this.handlePaging.bind(this);
			this.handleClickSearch = this.handleClickSearch.bind(this);
			this.handleClickReset = this.handleClickReset.bind(this);
			this.handleChangeInput = this.handleChangeInput.bind(this);
			this.handleUpdateOnce = this.handleUpdateOnce.bind(this);
			this.handleChangeOther = this.handleChangeOther.bind(this);
		}
		public componentDidMount(): void {
			// 描画時に自動検索
			this.handleClickSearch();
		}
		/**
		 * search 検索メソッド
		 */
		public async search(condition: T, page: number): Promise<void> {
			try {
				const result = await searchAPI(condition, page);
				this.setState({
					paging: {
						total: result.total,
						page: result.page,
						perpage: result.perpage,
						totalpage: result.totalpage
					},
					records: result.data
				});
			} catch (error) {
				console.dir(error);
				if ("data" in error) {
					const { data } = error;
					if (
						Array.isArray(data) &&
						data.length > 0 &&
						data[0] === "should_reset"
					) {
						this.setState({
							records: []
						});
					}
				}
			}
		}
		/**
		 * handlePaging ページング部クリック
		 * @param ev イベント
		 * @param page ページ数
		 */
		public handlePaging(_ev: React.MouseEvent, page: number): void {
			const { condition } = this.state;
			this.search(condition, page);
		}
		/**
		 * handleClickSearch
		 */
		public handleClickSearch(_ev?: React.MouseEvent): void {
			const { condition, paging } = this.state;
			// 検索ボタンを押したときのみ条件を保存
			if (ssm !== null && ssm.CanUseSS) {
				const stringCondition = JSON.stringify(condition);
				ssm.save(stringCondition);
			}
			this.search(condition, paging.page);
		}
		/**
		 * handleClickReset
		 */
		public handleClickReset(_ev: React.MouseEvent): void {
			const strInitial = JSON.stringify(initialCondition);
			this.setState({
				condition: JSON.parse(strInitial)
			});
		}
		/**
		 * handleChangeInput
		 * @param ev イベント
		 * @param isCheck チェック系 input か否かのフラグ
		 * @param values チェックボックスの変更時に設定して呼び出す
		 */
		public handleChangeInput(
			ev: React.ChangeEvent | IFakeEvent,
			isCheck: boolean = false,
			values: string[] = []
		): void {
			const { condition } = this.state;
			const { name, value } = ev.target as HTMLInputElement;
			if (!isCheck) {
				// 通常はコチラ
				if (name in condition) {
					const key = name;
					(condition as TCondition)[key] = value;
					this.setState({
						condition
					});
				}
			} else {
				// checkbox のときはコチラ
				if (name in condition) {
					const key = name;
					(condition as TCondition)[key] = values;
					this.setState({
						condition
					});
				}
			}
		}
		/**
		 * handleUpdateOnce 検索部の select で別の select が変わったりするときのためのハンドラ
		 * condition と、select 用リストを一括更新する
		 * @param condition
		 * @param other
		 */
		public handleUpdateOnce(condition: T, other: U): void {
			const cloneCondition = JSON.parse(JSON.stringify(condition));
			this.setState({
				condition: cloneCondition,
				other
			});
		}
		/**
		 * handleChangeOther
		 * @param other
		 */
		public handleChangeOther(other: U): void {
			this.setState({
				other
			});
		}
		/**
		 * render
		 */
		public render(): JSX.Element {
			const { paging, condition, records, other } = this.state;
			return (
				<WrappedComponent
					{...this.props}
					pageProps={paging}
					condProps={condition}
					recordProps={records}
					otherProps={other}
					onClickPaging={this.handlePaging}
					onClickSearch={this.handleClickSearch}
					onClickReset={this.handleClickReset}
					onChangeInput={this.handleChangeInput}
					onUpdateOnce={this.handleUpdateOnce}
					onChangeOther={this.handleChangeOther}
				/>
			);
		}
	};
}
