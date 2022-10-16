
export const BASE_URL = process.env?.BASE_URL ?? '' as const
export const MARVEL_PUBLIC_KEY = process.env?.MARVEL_PUBLIC_KEY ?? '' as const
export const MARVEL_PRIVATE_KEY = process.env?.MARVEL_PRIVATE_KEY ?? '' as const

export const HEADERS = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
} as const

