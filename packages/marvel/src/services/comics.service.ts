import Api, {KO, OK} from 'core/src';
import {IComicDataWrapper, ICreatorDataWrapper} from "../schemas";

const GET_COMICS = `/v1/public/comics` as const

export const fetchComics = (): Promise<OK<IComicDataWrapper> | KO> => {
    const api = new Api()
    return api.request(GET_COMICS).method('GET').exec<IComicDataWrapper>()
}

export const fetchCreatorsByComicId = (id: number): Promise<OK<ICreatorDataWrapper> | KO> => {
    const api = new Api()
    return api.request(`${GET_COMICS}/${id}/creators`).method('GET').exec<ICreatorDataWrapper>()
}
