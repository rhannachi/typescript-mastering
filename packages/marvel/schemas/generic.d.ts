
interface IDataWrapper<T> {
    code: number,
    status :string,
    data: IDataContainer<T>,
}

interface IDataContainer<T> {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: T[]
}
