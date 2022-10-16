import {IDataWrapper} from "./generic";


export interface IComicDataWrapper extends IDataWrapper<IComic> {}

// interface IComicDataContainer extends IDataContainer<IComic> {}

export interface IComic {
    id: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
}
