
// TODO ...
// export interface IApiComic {
//     id: number
//     digitalId: number
//     title (string, optional): The canonical title of the comic.,
//     issueNumber (double, optional): The number of the issue in the series (will generally be 0 for collection formats).,
//     variantDescription (string, optional): If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
//     description (string, optional): The preferred description of the comic.,
// }

export interface IApiError {
    code: string,
    message: string
}