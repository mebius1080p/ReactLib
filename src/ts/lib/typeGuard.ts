//主に try-catch で使用する、message の有無を調べるためのタイプガード関数

interface IErrorWithMessage {
	message: string;
}

export function hasMessage(obj: any): obj is IErrorWithMessage {
	return (obj as IErrorWithMessage).message !== undefined;
}

export type TSimpleObj = {
	[key: string]: any;
};
interface IErrorWithData<T> {
	data: T;
}
export function hasData<T>(obj: any): obj is IErrorWithData<T> {
	return (obj as IErrorWithData<T>).data !== undefined;
}
