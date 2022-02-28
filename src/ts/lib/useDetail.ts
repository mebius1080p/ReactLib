import * as React from "react";
import { fetchJsonObjAsync, ISimpleFetchOption } from "../common";
import { ICommittable, simpleCommit } from "./simpleCommit";
import { hasMessage } from "./typeGuard";
import { IFakeEvent } from "./useBasicSearch";

export function useDetail<T extends ICommittable, P = {}>(
	initialObj: T,
	entryUrl: string,
	commitUrl: string,
	initialParam?: P,
	fetchParamFunc?: () => Promise<P>
) {
	// hook
	const [hasInitialized, setHasInitialized] = React.useState(false);
	const [inputObj, setInputObj] = React.useState<T>(
		JSON.parse(JSON.stringify(initialObj))
	);
	const [param, setParam] = React.useState<P | undefined>(initialParam);
	const [message, setMessage] = React.useState("");

	// handler
	const handleChangeInput = (
		ev:
			| React.ChangeEvent<
					HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			  >
			| IFakeEvent
	) => {
		const { name, value } = ev.target;
		if (name in inputObj) {
			if (typeof inputObj[name] === "number") {
				(inputObj as ICommittable)[name] = Number(value);
			} else {
				(inputObj as ICommittable)[name] = value;
			}
			setInputObj({ ...inputObj });
		}
	};
	const simpleCommitX = async () => {
		await simpleCommit(commitUrl, inputObj);
	};

	// effect
	React.useEffect(() => {
		(async () => {
			try {
				if (fetchParamFunc) {
					const extraParam = await fetchParamFunc();
					setParam(extraParam);
				}

				const fetchParam: ISimpleFetchOption = {
					url: entryUrl,
					method: "GET",
				};
				const response = await fetchJsonObjAsync<T>(fetchParam);
				setInputObj({ ...inputObj, ...response.data }); //マージ

				setHasInitialized(true);
			} catch (error) {
				console.dir(error);
				if (hasMessage(error)) {
					setMessage(error.message);
				}
			}
		})();
	}, []);

	return {
		hasInitialized,
		inputObj,
		message,
		param,
		setMessage,
		handleChangeInput,
		simpleCommitX,
	};
}
