import {MD5} from "crypto-js";

const MARVEL_PUBLIC_KEY = process.env?.MARVEL_PUBLIC_KEY ?? '' as const
const MARVEL_PRIVATE_KEY = process.env?.MARVEL_PRIVATE_KEY ?? '' as const

export const credentials = () : string => {
    const timestamp = (new Date()).getTime()
    const hash = MD5(`${timestamp}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`).toString()
    return `ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
}