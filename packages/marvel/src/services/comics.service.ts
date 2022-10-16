import {IComicDataWrapper, ICreatorDataWrapper} from "../schemas";
import Http, {KO, OK} from "http-client";

const GET_COMICS = `/v1/public/comics` as const

export const fetchComics = (): Promise<OK<IComicDataWrapper> | KO> => {
    const api = new Http()
    return api.request(GET_COMICS).method('GET').exec<IComicDataWrapper>()
}

export const fetchCreatorsByComicId = (id: number): Promise<OK<ICreatorDataWrapper> | KO> => {
    const api = new Http()
    return api.request(`${GET_COMICS}/${id}/creators`).method('GET').exec<ICreatorDataWrapper>()
}
