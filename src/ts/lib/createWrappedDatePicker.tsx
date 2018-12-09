import * as React from "react";

interface IWrappedDatePickerProps {
	name?: string;
	value?: string;
	extraClass?: string;
	onClick?: (ev: React.MouseEvent) => void;
}

export interface IInjectedProps {
	name: string;
	value: string;
	extraClass?: string;
	onClick: (ev: React.MouseEvent) => void;
	onClickSetToday?: (ev: React.MouseEvent) => void;
}

/**
 * react-datepicker 用の HOC 作成関数
 * @param DealerDatePicker ラップするコンポーネント
 * @param extraClass 追加で設定するクラス
 * @param onClickSetToday 今日にするボタンにセットするハンドラ 必須ではない
 */
export function createWrappedDatePicker(
	DealerDatePicker: React.ComponentType<IInjectedProps>,
	extraClass: string = "",
	onClickSetToday: (ev: React.MouseEvent) => void = ev => {}
) {
	return class extends React.Component<IWrappedDatePickerProps, any> {
		constructor(props: IWrappedDatePickerProps) {
			super(props);
		}
		public render(): JSX.Element {
			const emptyClickHandler = (ev: React.MouseEvent) => {};
			return (
				<DealerDatePicker
					name={this.props.name || ""}
					value={this.props.value || ""}
					extraClass={extraClass}
					onClick={this.props.onClick || emptyClickHandler}
					onClickSetToday={onClickSetToday}
				/>
			);
		}
	};
}
