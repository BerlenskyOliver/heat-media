import { useState, useEffect, useCallback } from 'react'
import { usePaginatedQuery } from "hooks/useDatabase"
import MainLayout from "layouts/MainLayout"
import MainCard from 'components/Card/MainCard'
import Button from "@material-ui/core/Button"

const Videos = () => {
    const {data, next, load} = usePaginatedQuery('videos', 'name', 'asc', 100)
    const [videos, setVideos] = useState([])

    useEffect(() => setVideos(videos => [...videos, ...data]), [data])

    const loadMore = useCallback(() => load('videos', 'name', 'asc', 100, next), [next])

    return (
        <div>
            <div className="pb-8 flex justify-between">
                <h1 className="text-white text-3xl font-semibold">Videos</h1>             
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-2 gap-6">
                {videos?.map((video, index) => (
                    <MainCard 
                    key={index} 
                    name={video.name} 
                    image={video.imageSrc} 
                    link={`/videos/${video.id}`} 
                    video={true}
                    />
                ))}
            </div>
            {next && <div className="text-center">
                <Button variant="contained" className="more_btn" onClick={loadMore}>Load more</Button>
            </div>}
        </div>
    )
}

export default Videos

Videos.Layout = MainLayout