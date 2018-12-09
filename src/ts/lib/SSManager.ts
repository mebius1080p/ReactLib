"use strict";
/**
 * セッションストレージのラッパー管理クラス
 */
export class SSManager {
	private ss: Storage = window.sessionStorage;
	private key: string = "";
	private canUseSS: boolean = false;
	/**
	 * コンストラクタ
	 * @param {string} key セッションストレージで使うデータ保存のキー
	 * @param {boolean} useSessionStorage セッションストレージを使うかどうかのフラグ false だと localstorage を使用
	 */
	constructor(key: string, useSessionStorage = true) {
		this.key = key;
		try {
			if (useSessionStorage) {
				this.ss = window.sessionStorage;
			} else {
				this.ss = window.localStorage;
			}
			const len: number = this.ss.length; // cookie off ならここで例外が出る
			this.canUseSS = true;
		} catch (x) {
			// dd;
		}
	}

	/**
	 * SS が使えるかどうかを示す getter
	 * @return {boolean} セッションストレージが使えるかどうかのフラグ
	 */
	public get CanUseSS(): boolean {
		return this.canUseSS;
	}

	/**
	 * clear セッションストレージデータを削除するメソッド
	 */
	public clear(): void {
		if (this.canUseSS) {
			this.ss.removeItem(this.key);
		}
	}
	/**
	 * save データ保存メソッド
	 * @param {string} data セッションストレージに保存する文字列
	 */
	public save(data: string): void {
		if (this.canUseSS) {
			try {
				this.ss.setItem(this.key, data);
			} catch (error) { // mac safari プライベートブラウジング中に保存すると例外が出る対策
				console.dir(error);
			}
		}
	}
	/**
	 * restore データ取得メソッド
	 * @return {string} セッションストレージに保存されていた文字列
	 */
	public restore(): string {
		if (this.canUseSS) {
			let restoreValue: string | null = this.ss.getItem(this.key);
			return restoreValue === null ? "" : restoreValue;
		} else {
			return "";
		}
	}
}
