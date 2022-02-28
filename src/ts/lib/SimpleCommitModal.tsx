import * as React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const modalString: TModalDic = {
	confirm: {
		title: "登録確認",
		message: "登録しますか？",
		useYesNo: true,
		cls: "bg-success text-white",
	},
	error: {
		title: "エラー",
		message: "エラーが発生しました",
		useYesNo: false,
		cls: "bg-danger text-white",
	},
	thanks: {
		title: "登録完了",
		message: "登録完了",
		useYesNo: false,
		cls: "bg-primary text-white",
	},
};

interface ISimpleCommitModalProps {
	type: TModalMode;
	handleYes: () => Promise<void>;
	handleClose: () => void;
	handleThanks: () => void;
}

export type TModalMode = "confirm" | "error" | "thanks";
type TModalDic = { [x in TModalMode]: IDicObj };
interface IDicObj {
	title: string;
	message: string;
	useYesNo: boolean;
	cls: string;
}

export const SimpleCommitModal: React.FunctionComponent<
	ISimpleCommitModalProps
> = (props: ISimpleCommitModalProps) => {
	const { type, handleYes, handleClose, handleThanks } = props;

	// hook
	const [enableButton, setEnableButton] = React.useState(true);

	// handler
	const handleCommit = async (ev: React.MouseEvent) => {
		setEnableButton(false);
		await handleYes(); // try-catch しておくこと
		setEnableButton(true);
	};
	const handleTerminate = (ev: React.MouseEvent) => {
		if (type === "error") {
			handleClose();
		}
		if (type === "thanks") {
			handleThanks();
		}
	};

	return (
		<Modal isOpen={true} toggle={handleClose}>
			<ModalHeader toggle={handleClose} className={modalString[type].cls}>
				{modalString[type].title}
			</ModalHeader>
			<ModalBody>{modalString[type].message}</ModalBody>
			<ModalFooter>
				{modalString[type].useYesNo && (
					<React.Fragment>
						<button
							type="button"
							className="btn btn-primary btn-sm"
							onClick={handleCommit}
							disabled={!enableButton}
						>
							はい
						</button>
						<button
							type="button"
							className="btn btn-secondary btn-sm"
							onClick={(ev) => {
								handleClose();
							}}
							disabled={!enableButton}
						>
							いいえ
						</button>
					</React.Fragment>
				)}
				{!modalString[type].useYesNo && (
					<button
						type="button"
						className="btn btn-secondary btn-sm"
						onClick={handleTerminate}
						disabled={!enableButton}
					>
						閉じる
					</button>
				)}
			</ModalFooter>
		</Modal>
	);
};
