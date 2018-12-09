import { SSManager } from "./SSManager";

/**
 * SSManager からのデータを savedCondition に移すメソッド
 * @param ssm ssmanager
 * @param savedCondition 保存されていたとみなす条件を収めたオブジェクト
 */
export function copySSCondition<T>(ssm: SSManager, savedCondition: T): void {
	if (ssm.CanUseSS) {
		const savedConditionStr = ssm.restore();
		// console.log("saved string:" + savedConditionStr);
		try {
			const restoredObj = JSON.parse(savedConditionStr);
			// 階層化されていないことが望ましい。保存されていた各プロパティをコピーする
			for (const key in savedCondition) {
				if (key in restoredObj) {
					savedCondition[key] = restoredObj[key];
				}
			}
		} catch (error) {
			// JSON.parse などで例外。不正データはクリアする
			ssm.clear();
			console.dir(error);
		}
	}
}
