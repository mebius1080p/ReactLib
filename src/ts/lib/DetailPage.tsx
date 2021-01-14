import * as React from "react";
import { DetailPageButtons } from "./DetailPageButtons";
import { SimpleCommitModal, TModalMode } from "./SimpleCommitModal";
import { IFakeEvent } from "./useBasicSearch";

interface IDetailPageProps<D, E> {
	title: string;
	InsideComponent: React.FunctionComponent<IInsideComponentProps<D, E>>;
	inputObj: D; //素通り
	extraParam: E;
	handleChangeInput: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => void; //素通り
	simpleCommit: () => Promise<void>;
	handleBack: () => void;
	preProcessCommit?: (obj: D) => void;
}

export interface IInsideComponentProps<D, E> {
	inputObj: D;
	inputError: Partial<TInputError<D>>;
	extraParam: E;
	handleChangeInput: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => void;
}

export type TInputError<D extends Record<string, any>> = {
	[key in keyof D as string]: string;
};

export function DetailPage<D extends Record<string, any>, E>(
	props: IDetailPageProps<D, E>
) {
	const {
		title,
		InsideComponent,
		inputObj,
		extraParam,
		handleChangeInput,
		simpleCommit,
		handleBack,
		preProcessCommit = (inputObj:D) => {},
	} = props;

	const [inputError, setInputError] = React.useState<Partial<TInputError<D>>>({});
	const [showModal, setShowModal] = React.useState(false);
	const [modalType, setModalType] = React.useState<TModalMode>("confirm");

	//handler
	const handleCommit = () => {
		preProcessCommit(inputObj);
		setModalType("confirm");
		setShowModal(true);
	};
	const handleYes = async () => {
		try {
			setInputError({}); // reset
			await simpleCommit();
			setModalType("thanks");
		} catch (error) {
			console.dir(error);
			if ("data" in error) {
				for (const key in error.data) {
					if (error.data.hasOwnProperty(key)) {
						// const element = error.data[key];
						inputError[key] = "border border-danger";
					}
				}
				setInputError({ ...inputError });
			}
			setModalType("error");
		}
	};
	const handleClose = () => {
		setShowModal(false);
	};
	const handleThanks = () => {
		setShowModal(false);
		handleBack();
	};

	return (
		<div className="container">
			<h4>
				<i className="fas fa-pen"></i>
				{title}新規作成・詳細
			</h4>
			<form>
				<table className="table table-bordered table-striped table-condensed table-sm">
					<InsideComponent
						inputObj={inputObj}
						inputError={inputError}
						extraParam={extraParam}
						handleChangeInput={handleChangeInput}
					/>
				</table>
			</form>
			<DetailPageButtons
				handleBack={handleBack}
				handleCommit={handleCommit}
			/>
			{showModal && (
				<SimpleCommitModal
					type={modalType}
					handleYes={handleYes}
					handleClose={handleClose}
					handleThanks={handleThanks}
				/>
			)}
		</div>
	);
}
