import {useState, useCallback} from 'react'
import {storage} from "lib/firebase/client"

const useStorage = (file: File, path: String, callback: FunctionConstructor) => {

    const [progress, setProgress] = useState<Number>(0)
    const [error, setError] = useState(null)
    
    const upload = useCallback(() => {
        const uploadTask = storage.ref(`${path}${file.name}`).put(file)
        
        uploadTask.on(
            "state_changed",
            (snapshot:any) => {
                const progress = Math.round(
                    ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) 
                );

                setProgress(progress)
            },
            (error: any) => {
                setError(error)
            },
            () => {
                storage.ref().child(file.name)
                .getDownloadURL()
                .then(async (url: string) => {
                    setProgress(95)
                    await callback(url)
                    setProgress(100)
                    setProgress(0)
                })
            }
        )
    }, [file, callback])

    return { upload, progress, error}

}

export default useStorage;