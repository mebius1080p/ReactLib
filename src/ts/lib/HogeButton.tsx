import * as React from "react";

interface IHogeButtonProps {
	/** コメント */
	str: string;
}

export const HogeButton: React.StatelessComponent<IHogeButtonProps> = (
	props: IHogeButtonProps
) => {
	const { str } = props;
	return <button>{str}</button>;
};
