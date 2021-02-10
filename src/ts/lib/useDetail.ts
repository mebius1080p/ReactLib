import * as React from "react";
import { fetchJsonObjAsync, ISimpleFetchOption } from "../common";
import { ICommittable, simpleCommit } from "./simpleCommit";
import { IFakeEvent } from "./useBasicSearch";

export function useDetail<T extends ICommittable>(
	initialObj: T,
	entryUrl: string,
	commitUrl: string
) {
	// hook
	const [hasInitialized, setHasInitialized] = React.useState(false);
	const [inputObj, setInputObj] = React.useState<T>(
		JSON.parse(JSON.stringify(initialObj))
	);
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
				const fetchParam: ISimpleFetchOption = {
					url: entryUrl,
					method: "GET",
				};
				const response = await fetchJsonObjAsync<T>(fetchParam);
				setInputObj(response.data);

				setHasInitialized(true);
			} catch (error) {
				console.dir(error);
				if ("message" in error) {
					setMessage(error.message);
				}
			}
		})();
	}, []);

	return {
		hasInitialized,
		inputObj,
		message,
		handleChangeInput,
		simpleCommitX,
	};
}
