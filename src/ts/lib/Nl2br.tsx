import * as React from "react";

interface INl2brProps {
	/** 改行付きにする文字列 */
	str: string;
}

/**
 * str で与えられた文字列(テンプレートリテラルでの文字列を想定)を、html 上で改行付きで表示させるためのコンポーネント
 * es6 のテンプレートリテラルの改行は \n な模様
 * @param props props
 */
export const Nl2br: React.StatelessComponent<INl2brProps> = (
	props: INl2brProps
) => {
	const reCRLF = new RegExp("\n");
	const { str } = props;
	return (
		<React.Fragment>
			{str.split(reCRLF).map((line, index) => {
				return (
					<React.Fragment key={index}>{line.trim()}<br/></React.Fragment>
				);
			})}
		</React.Fragment>
	);
};
