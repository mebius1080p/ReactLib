import * as React from "react";

interface IDetailPageButtonsProps {
	handleBack: () => void;
	handleCommit: () => void;
}

export const DetailPageButtons: React.FunctionComponent<IDetailPageButtonsProps> = (
	props: IDetailPageButtonsProps
) => {
	const { handleBack, handleCommit } = props;

	return (
		<div className="d-flex justify-content-around">
			<div>
				<button
					type="button"
					className="btn btn-secondary btn-sm"
					onClick={handleBack}
				>
					<i className="fas fa-chevron-left" /> 戻る
				</button>
			</div>
			<div>
				<button
					type="button"
					className="btn btn-success btn-sm"
					onClick={handleCommit}
				>
					<i className="fas fa-check" /> 登録
				</button>
			</div>
		</div>
	);
};
