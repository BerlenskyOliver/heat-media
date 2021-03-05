import {useCallback, useState} from "react";
import FetchApi from 'lib/FetchApi'

const Api_root = process.env.NEXT_PUBLIC_LAST_API_ROOT_URL
const key  = process.env.NEXT_PUBLIC_LAST_FM_API_KEY

export default function useLastfm (method: string, offset: number) {

    const [items, setItems] = useState([])

    const load = useCallback(async () => {
        // const response = await fetchApi(`${Api_root}${method}&api_key=${key}&format=json&offset=${offset}`)
        // setItems(response)
    }, [])

    return{
        load,
        items,
        setItems
    }
}