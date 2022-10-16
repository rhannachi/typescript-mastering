import {IDataWrapper} from "./generic";


export type IComicDataWrapper = IDataWrapper<IComic>

// interface IComicDataContainer extends IDataContainer<IComic> {}

export interface IComic {
    id: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
}
