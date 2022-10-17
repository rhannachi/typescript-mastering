import {fetchComics, fetchCreatorsByComicId} from "marvel-services";

const main = async () => {
    const comicsResponse = await fetchComics()
    const fetchCreators = await fetchCreatorsByComicId(323)
    console.log(JSON.stringify(comicsResponse, null, 2))
    console.log(JSON.stringify(fetchCreators, null, 2))
}

(async () => {
    try {
        await main()
    } catch (e) {
        console.error('Error', e)
    }
})();

