import * as React from "react";
import { DetailPageButtons } from "./DetailPageButtons";
import { SimpleCommitModal, TModalMode } from "./SimpleCommitModal";
import { hasData, hasMessage, TSimpleObj } from "./typeGuard";
import { IFakeEvent } from "./useBasicSearch";

interface IInputObjBase {
	[str: string]: any;
}

interface IDetailPageProps<D extends IInputObjBase, E> {
	title: string;
	InsideComponent: React.FunctionComponent<IInsideComponentProps<D, E>>;
	inputObj: D; //素通り
	extraParam: E;
	message?: string;
	setMessage: (message: string) => void;
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

export interface IInsideComponentProps<D extends IInputObjBase, E> {
	inputObj: D;
	inputError: TInputError2;
	extraParam: E;
	handleChangeInput: (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => void;
}

export type TInputError2 = {
	[K: string]: string;
};

export function DetailPage<D extends IInputObjBase, E>(
	props: IDetailPageProps<D, E>
) {
	const {
		title,
		InsideComponent,
		inputObj,
		extraParam,
		message = "",
		setMessage,
		handleChangeInput,
		simpleCommit,
		handleBack,
		preProcessCommit = (inputObj: D) => {},
	} = props;

	const [inputError, setInputError] = React.useState<TInputError2>({});
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
			if (hasData<TInputError2>(error)) {
				const newInputError: TInputError2 = {};
				for (const key in error.data) {
					if (error.data.hasOwnProperty(key)) {
						// const element = error.data[key];
						inputError[key] = "border border-danger";
						newInputError[key] = "border border-danger";
					}
				}
				setInputError(newInputError);
			}
			if (hasMessage(error)) {
				setMessage(error.message);
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
			{message !== "" && (
				<div className="alert alert-danger">{message}</div>
			)}

			<table className="table table-bordered table-striped table-condensed table-sm">
				<InsideComponent
					inputObj={inputObj}
					inputError={inputError}
					extraParam={extraParam}
					handleChangeInput={handleChangeInput}
				/>
			</table>
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
