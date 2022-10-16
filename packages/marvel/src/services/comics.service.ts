import {IComicDataWrapper, ICreatorDataWrapper} from "../schemas";
import Http, {KO, OK} from "http-client";
import {MD5} from "crypto-js";

export const BASE_URL = process.env?.BASE_URL ?? '' as const
export const MARVEL_PUBLIC_KEY = process.env?.MARVEL_PUBLIC_KEY ?? '' as const
export const MARVEL_PRIVATE_KEY = process.env?.MARVEL_PRIVATE_KEY ?? '' as const

const GET_COMICS = `/v1/public/comics` as const

const credentials = () : string => {
    const timestamp = (new Date()).getTime()
    const hash = MD5(`${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`).toString()
    return `ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
}

export const fetchComics = (): Promise<OK<IComicDataWrapper> | KO> => {
    const api = new Http(BASE_URL)
    return api.request(`${GET_COMICS}?${credentials()}`).method('GET').exec<IComicDataWrapper>()
}

export const fetchCreatorsByComicId = (id: number): Promise<OK<ICreatorDataWrapper> | KO> => {
    const api = new Http(BASE_URL)
    return api.request(`${GET_COMICS}/${id}/creators?${credentials()}`).method('GET').exec<ICreatorDataWrapper>()
}
