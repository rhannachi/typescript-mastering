import MD5 from "crypto-js/md5";

import fetch, {Headers, Request} from 'node-fetch';
import {IApiError} from "@/marvel/schemas";

const HEADERS = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
} as const

type MethodType = 'GET'

type OK<T> = { status: 'OK'; response: T }
type KO = { status: 'KO'; error: IApiError }

const okTransform = <T>(response: T): OK<T> => {
    return Object.freeze({ status: 'OK', response })
}

const koTransform = (error: IApiError | Error): KO => {
    if (error instanceof  Error) {
        return { status: 'KO', error: { code: '500', message: error.message} }
    }
    return { status: 'KO', error }
}

class Api {
    private readonly _headers: Headers
    private _url: string
    private _method: MethodType


    constructor() {
        this._headers = new Headers(HEADERS)
        this._method = 'GET'
    }

    private credentials() : string {
        const publicKey = process.env?.MARVEL_PUBLIC_KEY
        const privateKey = process.env?.MARVEL_PRIVATE_KEY
        const timestamp = (new Date()).getTime()
        const hash = MD5(`${timestamp}${privateKey}${publicKey}`).toString()
        return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    }

    public request(url: string): this {
        this._url = `${url}${this.credentials()}`
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
                .then(([status, response]: [number, T | IApiError]) => {
                    if (status === 200) {
                        resolve(okTransform<T>(response as T) )
                    }
                    resolve(koTransform(response as IApiError ))
                })
                .catch((error: Error) => resolve(koTransform(error)))
        })

    }
}

export default Api