import fetch, {Headers, Request} from 'node-fetch';
import {IError, KO, OK} from "./schemas";
// TODO remove import *.d.ts

export const HEADERS = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
} as const

type MethodType = 'GET'

class HttpClient {
    private readonly _headers: Headers
    private _url: string
    private _method: MethodType

    constructor(baseUrl: string) {
        this._headers = new Headers(HEADERS)
        this._method = 'GET'
        this._url = baseUrl
    }

    private okTransform <T>(response: T): OK<T> {
        return Object.freeze({ status: 'OK', response })
    }

    private koTransform (error: IError | Error): KO {
        if (error instanceof  Error) {
            return { status: 'KO', error: { code: '500', message: error.message} }
        }
        return { status: 'KO', error }
    }

    public request(url: string): this {
        this._url = `${this._url}${url}`
        return this
    }

    public method(method: MethodType): this {
        this._method = method
        return this
    }

    public async exec<T>(): Promise<OK<T> | KO> {
        const request = new Request(this._url, {
            method: this._method,
            headers: this._headers,
        })

        return new Promise((resolve) => {
            fetch(request)
                .then((response) => Promise.all([response.status, response.json()]))
                .then(([status, response]: [number, T | IError]) => {
                    if (status === 200) {
                        resolve(this.okTransform<T>(response as T) )
                    }
                    resolve(this.koTransform(response as IError ))
                })
                .catch((error: Error) => resolve(this.koTransform(error)))
        })

    }
}

export default HttpClient