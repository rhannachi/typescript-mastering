import {IComicDataWrapper, ICreatorDataWrapper} from "../schemas";
import Http, {KO, OK} from "http-client";
import {credentials} from "../helpers";

export const BASE_URL = process.env?.BASE_URL ?? '' as const

const GET_COMICS = `/v1/public/comics` as const

export const fetchComics = (): Promise<OK<IComicDataWrapper> | KO> => {
    const api = new Http(BASE_URL)
    return api
        .request(`${GET_COMICS}?${credentials()}`)
        .method('GET')
        .exec<IComicDataWrapper>()
}

export const fetchCreatorsByComicId = (id: number): Promise<OK<ICreatorDataWrapper> | KO> => {
    const api = new Http(BASE_URL)
    return api
        .request(`${GET_COMICS}/${id}/creators?${credentials()}`)
        .method('GET')
        .exec<ICreatorDataWrapper>()
}
