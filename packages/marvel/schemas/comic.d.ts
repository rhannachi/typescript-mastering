

interface IComicDataWrapper extends IDataWrapper<IComic> {}

interface IComicDataContainer extends IDataContainer<IComic> {}

interface IComic {
    id: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
}
