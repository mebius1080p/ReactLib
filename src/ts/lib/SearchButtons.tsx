import * as React from "react";

interface ISearchButtonsProps {
	handleReset: (ev: React.MouseEvent) => void;
	handleSearch: (ev: React.MouseEvent | null) => void;
}

export const SearchButtons: React.FunctionComponent<ISearchButtonsProps> = (
	props: ISearchButtonsProps
) => {
	const { handleReset, handleSearch } = props;

	return (
		<div className="d-flex justify-content-end">
			<div className="mr-3">
				<button
					type="button"
					className="btn btn-secondary btn-sm"
					onClick={handleReset}
				>
					<i className="fas fa-redo-alt" />
					リセット
				</button>
			</div>
			<div>
				<button
					type="button"
					className="btn btn-info btn-sm"
					onClick={handleSearch}
				>
					<i className="fas fa-search" />
					検索
				</button>
			</div>
		</div>
	);
};
