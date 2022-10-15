import 'dotenv/config'
import {fetchComics, fetchCreatorsByComicId} from "@/marvel/services";

const main = async () => {

    const comicsResponse = await fetchComics()

    if (comicsResponse.status === 'OK') {
        // TODO array of comic Ids
        const comics = comicsResponse.response.data.results.slice(0,3) // TODO remove slice
        const comicIdsTODO = comics.map(async (comic) => {
            const creatorsResponse = await fetchCreatorsByComicId(comic.id)
            if (creatorsResponse.status === "OK") {
                return creatorsResponse.response.data.results
            }
            return
        })

        const result = await Promise.all(comicIdsTODO)
        console.log('array of comic Ids ===>', JSON.stringify(result, null, 2))
    }
}



(async () => {
    try {
        await main()
    } catch (e) {
        console.error('Error', e)
    }
})();

