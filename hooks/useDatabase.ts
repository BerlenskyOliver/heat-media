import {useState, useCallback, useEffect} from 'react'
import {database, FieldValue} from "lib/firebase/client"

export const useSimpleQuery = (
    collection: string, 
    orderBy: string = 'timestamp',
    direction: any = 'desc',
    limit: number = 100
) => {
    const [data, setData] = useState([])

    const load = useCallback(() => {
        const unsubscribe = database
        .collection(collection)
        .orderBy(orderBy, direction)
        .limit(limit)
        .onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
        })
        return unsubscribe
    },[])

    useEffect(() => {
        const unsubscribe = load()
        return () => unsubscribe()
    }, [])

    return {
        load,
        data
    }
}

export const useWhereQuery = (
    collection:string, 
    feild: string, 
    operator: any = "==", 
    value: string | string[], 
    orderBy?: string,
    direction?: any
    ) => {
    const [data, setData] = useState([])

    const load = useCallback(() => {
        let unsubscribe;
        if(orderBy && direction){
            unsubscribe =database
            .collection(collection)
            .where(feild, operator, value)
            .orderBy(orderBy, direction)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
            })
        }else{
            unsubscribe = database
            .collection(collection)
            .where(feild, operator, value)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
            })
        }
        return unsubscribe
    }, [value])

    useEffect(() => {
        if(value) {
            const unsubscribe = load()
            return () => unsubscribe()
        }
    }, [value])
    
    return {
        load,
        data
    }
}

export const useQueryWithChild = (
    collection: string, 
    docId: string, 
    childCollection: string, 
    orderBy: string = 'timestamp',
    direction: any = 'desc',
) => {
    const [data, setData] = useState([])

    const load = useCallback(() => {
        
        const unsubscribe = database
            .collection(collection)
            .doc(docId)
            .collection(childCollection)
            .orderBy(orderBy, direction)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
            })
        return unsubscribe
    },[])

    useEffect(() => {
        const unsubscribe = load()
        return () =>  unsubscribe()
    }, [])

    return { load, data }
}

export const usePaginatedQuery = (
    collection: string, 
    orderBy: string = 'timestamp',
    direction: any = 'desc',
    limit: number = 100, 
    lastVisible?: any
) => {
    const [data, setData] = useState([])
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)

    const load = useCallback((
        collection: string, 
        orderBy: string = 'timestamp',
        direction: any = 'desc',
        limit: number = 100, 
        lastVisible?: any
    ) => {
        let unsubscribe;
        if(lastVisible){
            unsubscribe = database
            .collection(collection)
            .orderBy(orderBy, direction)
            .startAfter(lastVisible)
            .limit(limit)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
                setNext(snapshot.docs[snapshot.docs.length - 1])
            })   
        }else{
            
            unsubscribe = database
            .collection(collection)
            .orderBy(orderBy, direction)
            .limit(limit)
            .onSnapshot(snapshot => {
                setData(snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()})))
                setNext(snapshot.docs[snapshot.docs.length - 1])
            })
        }
        return unsubscribe

    }, [])

    useEffect(() => {
        const unsubscribe = load(collection, orderBy, direction, limit, lastVisible)
        return () => unsubscribe()
    }, [])
    

    return { data, next, prev, load }
}


export const useCreate = () => {
    const [loading, setLoading] = useState(false)
    const create = useCallback(async (
        collection: string, 
        field: any
    ) => {
        setLoading(true)
        await database
            .collection(collection)
            .add({
                ...field,
                timestamp: FieldValue.serverTimestamp()
            })
        setLoading(false)
    }, [])
    return {create, loading}
}


export const useUpdate = () => {
    const [loading, setLoading] = useState(false)

    const update = useCallback(async (
        collection: string,
        docId: string,
        field: any,
    ) => {
        setLoading(true)
        await database
            .collection(collection)
            .doc(docId)
            .update({...field})
        setLoading(false)
    }, [])
    return {update, loading}
}

const useDelete = () => {
    const [loading, setLoading] = useState(false)

    const Del = useCallback(async (
        collection: string,
        docId: string,
    ) => {
        setLoading(true)
        await database
            .collection(collection)
            .doc(docId)
            .delete()
        setLoading(false)
    }, [])
    return {Del, loading}
}

