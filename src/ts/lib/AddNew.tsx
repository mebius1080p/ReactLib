import * as React from "react";

interface IAddNewProps {
	handleClickDetail: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AddNew: React.FunctionComponent<IAddNewProps> = (
	props: IAddNewProps
) => {
	const { handleClickDetail } = props;

	return (
		<div className="ml-auto">
			<button
				type="button"
				value="0"
				className="btn btn-success btn-sm"
				onClick={handleClickDetail}
			>
				<i className="fas fa-plus" /> 新規追加
			</button>
		</div>
	);
};
