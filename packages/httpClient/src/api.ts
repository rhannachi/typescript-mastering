import {MD5} from "crypto-js";
import fetch, {Headers, Request} from 'node-fetch';
import {BASE_URL, HEADERS, MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY} from "./helpers";
import {IError, KO, OK} from "./schemas";
// TODO remove import *.d.ts


type MethodType = 'GET'

class Http {
    private readonly _headers: Headers
    private _url: string
    private _method: MethodType

    constructor() {
        this._headers = new Headers(HEADERS)
        this._method = 'GET'
        this._url = BASE_URL
    }

    private credentials() : string {
        const timestamp = (new Date()).getTime()
        const hash = MD5(`${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`).toString()
        return `?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
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
        this._url = `${this._url}${url}${this.credentials()}`
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

export default Http