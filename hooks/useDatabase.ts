import {useState, useCallback, useEffect} from 'react'
import {database, FieldValue} from "lib/firebase/client"

export const useSimpleQuery = (
    collection: string, 
    orderBy: string = 'timestamp',
    direction: any = 'desc',
    withId: boolean = true
) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const load = useCallback(() => {
        setLoading(true)
        if(withId){
            database
            .collection(collection)
            .orderBy(orderBy, direction)
            .limit(100)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
            })
        }else{
            database
            .collection(collection)
            .orderBy(orderBy, direction)
            .limit(100)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => doc.data()))
            })
        }
        
        setLoading(false)
    },[])

    useEffect(() => {
        load()
        return () => load()
    }, [])

    return {
        load,
        data,
        loading
    }
}

export const useWhereQuery = (
    collection:string, 
    feild: string, 
    operator: any = "==", 
    value: string | string[], 
    orderBy?: string,
    direction?: any,
    withId: boolean = true
    ) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const load = useCallback(() => {
        setLoading(true)
        if(orderBy && direction){
            if(withId){
                database
                .collection(collection)
                .where(feild, operator, value)
                .orderBy(orderBy, direction)
                .onSnapshot(snapshot => {
                    setData(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
                })
            }else{
                database
                .collection(collection)
                .where(feild, operator, value)
                .orderBy(orderBy, direction)
                .onSnapshot(snapshot => {
                    setData(snapshot.docs.map(doc => doc.data()))
                })
            }
            
        }else{
            if(withId){
                database
                .collection(collection)
                .where(feild, operator, value)
                .onSnapshot(snapshot => {
                    setData(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
                })
            }else{
                database
                .collection(collection)
                .where(feild, operator, value)
                .onSnapshot(snapshot => {
                    setData(snapshot.docs.map(doc =>  doc.data()))
                })
            }
            
        }
        setLoading(false)

    }, [value])

    useEffect(() => {
        if(value) {
            load()
            return () => load()
        }
    }, [value])
    
    return {
        load,
        data,
        loading
    }
}

export const useQueryWithChild = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const load = useCallback( async (
        collection, 
        docId, 
        childCollection, 
        orderBy
    ) => {
        setLoading(true)

        database
            .collection(collection)
            .doc(docId)
            .collection(childCollection)
            .orderBy('timestamp', orderBy)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({id: doc.id, reel: doc.data()})))
            })
        setLoading(false)

    },[])

    return { load, data, loading }
}

export const useCreate = () => {
    const create = useCallback(async (
        collection: string, 
        field: any
    ) => {
        database
            .collection(collection)
            .add({
                ...field,
                timestamp: FieldValue.serverTimestamp()
            })
    }, [])
    return {create}
}


export const useUpdate = () => {
    const update = useCallback((
        collection: string,
        field: any
    ) => {
        database
            .collection(collection)
            
    }, [])
    return {update}
}

export const usePaginatedQuery = (
    collection: string, 
    orderBy: string = 'timestamp',
    direction: any = 'desc',
    limit: number = 100, 
    withId: boolean = true
) => {
    const [data, setData] = useState([])
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [loading, setLoading] = useState(false)

    const load = useCallback(() => {
        database
            .collection(collection)
            .orderBy(orderBy, direction)
            .limit(limit)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
            })
    }, [])

    useEffect(() => {
        load()
        return () => load()
    }, [])

    return { data, next, prev, loading }
}