import {useCallback, useState} from "react";


export default function useLastfm (method: string, offset: number) {

    const [items, setItems] = useState([])

    const load = useCallback(async () => {
        // const response = await fetchApi(`${env.LAST_API_ROOT_URL}${method}&api_key=${env.LAST_FM_API_KEY}&format=json&offset=${offset}`)
        // setItems(response)
    }, [])

    return{
        load,
        items,
        setItems
    }
}