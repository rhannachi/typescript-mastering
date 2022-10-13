
import 'dotenv/config'
import {GET_COMICS} from "@/marvel/services";
import Api from "@/marvel/services/api";

const fetchCharacters = async () => {
    const data = await new Api().request(GET_COMICS).method('GET').exec<any>()
    console.log('data ===>', data)
}



(async () => {
    try {
        await fetchCharacters()
    } catch (e) {
        console.error('Error', e)
    }
})();

