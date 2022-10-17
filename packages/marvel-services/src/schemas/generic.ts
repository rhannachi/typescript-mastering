
export interface IDataWrapper<T> {
    code: number,
    status :string,
    data: IDataContainer<T>,
}

export interface IDataContainer<T> {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: T[]
}
