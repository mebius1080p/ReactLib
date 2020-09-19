import * as React from "react";

interface IPriceFormatterProps {
	/** カンマ表示にする数 */
	price: number;
}

// コンポーネントの外に出しておけばキャッシュがきく
const formatter: Intl.NumberFormat = new Intl.NumberFormat("ja-JP");

export const PriceFormatter: React.FunctionComponent<IPriceFormatterProps> = (
	props: IPriceFormatterProps
) => {
	const { price } = props;
	return <span>{formatter.format(price)}</span>;
};
