import * as React from "react";
import { IListPanelProps } from "../lib/SearchPage";
import { IRecord } from "./SearchWithHook";

export const SampleList: React.FunctionComponent<IListPanelProps<IRecord>> = (
	props: IListPanelProps<IRecord>
) => {
	const { records, handleClickDetail } = props;

	return (
		<React.Fragment>
			<thead>
				<tr>
					<th style={{ width: "8em" }}>column1</th>
					<th>column2</th>
					<th>detail</th>
				</tr>
			</thead>
			<tbody>
				{records.map((r, index) => {
					return (
						<tr key={index}>
							<td>{r.fuga}</td>
							<td>{r.hoge}</td>
							<td>
								<button
									type="button"
									className="btn btn-secondary btn-sm"
									onClick={handleClickDetail}
								>
									detail
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</React.Fragment>
	);
};
