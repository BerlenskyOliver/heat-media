import FetchApi from "lib/FetchApi"

const url = 'https://api.unsplash.com'
const key = `?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`

export const getRandomPhoto = async () => {
    const res = await FetchApi(`${url}/photos/random${key}`)
    return res
}