import {IError} from "./error";

export interface OK<T> {
    status: 'OK',
    response: T
}
export interface KO {
    status: 'KO',
    error: IError
}

