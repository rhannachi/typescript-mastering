interface OK<T> {
    status: 'OK',
    response: T
}
interface KO {
    status: 'KO',
    error: IError
}

