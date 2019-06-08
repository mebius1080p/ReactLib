import * as React from "react";

interface IHogeButtonProps {
	/** コメント */
	str: string;
	/** 属性だよ */
	attr: IHogeAttr;
	/** クリック時のハンドラー */
	onClickHandler: (ev: React.MouseEvent) => void;
}

export interface IHogeAttr {
	type: "button" | "submit" | "reset" | undefined;
	cls: string;
}

export const HogeButton: React.StatelessComponent<IHogeButtonProps> = (
	props: IHogeButtonProps
) => {
	const { str, attr, onClickHandler } = props;
	return (
		<button type={attr.type} className={attr.cls} onClick={onClickHandler}>
			{str}
		</button>
	);
};
