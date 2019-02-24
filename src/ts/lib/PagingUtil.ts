/**
 * PagingUtil
 */
export class PagingUtil {
	/**
	 * calcPagingNumber ページング表示で、表示すべき最初の数値と最後の数値を計算するメソッド
	 * @param {number} page 現在のページ数。1 以上
	 * @param {number} totalpage 全ページ数
	 * @returns {IPagingNumber} IPagingNumber インターフェースを実装したオブジェクト
	 */
	public static calcPagingNumber(
		page: number,
		totalpage: number
	): IPagingNumber {
		// 返却オブジェクト初期化
		const result: IPagingNumber = {
			close: 1,
			hasNext: false,
			hasNextSibling: !(page === totalpage),
			hasPrev: false,
			hasPrevSibling: !(page === 1),
			open: 1,
			numberArray: []
		};

		const rest: number = page % 10;
		// open を求める
		if (rest === 0) {
			result.open = page - 9;
		} else {
			result.open = page - rest + 1;
		}

		// close を求める
		if (rest === 0) {
			result.close = page;
		} else {
			result.close = page + (10 - rest);
			if (result.close > totalpage) {
				result.close = totalpage;
			}
		}

		// hasPrev 判定
		if (result.open >= 11) {
			result.hasPrev = true;
		}

		// hasNext 判定
		const closeRest: number = result.close % 10;
		if (closeRest === 0) {
			// 10n のとき
			if (result.close + 1 <= totalpage) {
				result.hasNext = true;
			}
		} else {
			// closeRest が 0 ではないと言うことは最後のページ。
			// 次のページは絶対にない
		}

		// ページ数の配列作成
		for (let i = result.open; i <= result.close; i++) {
			result.numberArray.push(i);
		}
		return result;
	}
	/**
	 * calcPrevNextPage ページング部の数値でないところをクリックしてページ移動するとき、
	 * 次に行くべきページ数を計算するメソッド
	 * @param {number} page 現在のページ数
	 * @param {number} totalpage 全ページ数
	 * @param {number} addNumber 現在のページ数に加算する数 (-10, -1, 1, 10 のどれか)
	 * @returns {number} リクエストとして出すページ数の番号
	 */
	public static calcPrevNextPage(
		page: number,
		totalpage: number,
		addNumber: number
	): number {
		let requestPage: number = 1;
		requestPage = page + addNumber; // とりあえず加算
		if (requestPage <= 0) {
			// 0 以下は 1 に修正
			requestPage = 1;
		}
		if (requestPage > totalpage) {
			// total をオーバーしていたら total に修正
			requestPage = totalpage;
		}
		return requestPage;
	}
}

export interface IPagingNumber {
	open: number;
	close: number;
	hasPrev: boolean;
	hasNext: boolean;
	hasPrevSibling: boolean; // 直前ページ
	hasNextSibling: boolean; // 直後ページ
	numberArray: number[]; // 表示するページ数の配列 ex) 20-29 など
}
