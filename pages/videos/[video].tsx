import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import MainLayout from "layouts/MainLayout"
import {useWhereQuery} from 'hooks/useDatabase'
import { DeleteIcon, PlaylistPlayIcon } from 'components/Icons'
import IconButton  from '@material-ui/core/IconButton'
import VideoInlineCard from 'components/Card/VideoInlineCard'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Video = () => {
    const router = useRouter()
    const {video: videoId} = router.query
    const [actualVideo, setActualVideo] = useState<any>({})
    const {data: video} = useWhereQuery('videos', 'id', '==', videoId)
    const {data: videos}  = useWhereQuery('videos', 'playlist', '==', video[0]?.playlist, 'name', 'asc')
    console.log(video)
    useEffect(() => setActualVideo(video[0]), [video])

    const url =`https://www.youtube.com/embed/${videoId}`;

    const handleChange = (video: any) => setActualVideo(video)
    
    return (
        <>
        <div className="pb-8">
            <h1 className="text-white text-3xl font-semibold">{actualVideo?.name}</h1>
        </div>
        <div className={`grid grid-cols-1 ${video.length> 0 ? "lg:grid-cols-3 md:grid-cols-3 gap-8": ''}`}>
            <div className="col-span-2 pb-3">
                <iframe width="100%" height="395px" className="rounded-lg" title="youtube video"
                    src={url} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                {actualVideo && <div className="my-4 py-4 text-white border-b border-t border-gray-700">
                    <p className="text-xl font-semibold">{actualVideo?.name}</p>
                    {actualVideo?.playlist ? <span className="text-lg">In playlist :  {actualVideo?.playlist}</span>: null}
                    {actualVideo?.timestamp ? <p>Publier le : {dayjs.unix(actualVideo?.timestamp.seconds).fromNow()}</p> : null }
                </div>}
            </div>
            <div className={`col-span-1 ${videos.length > 0 ? "": 'hidden'}`}>
                <h4 className="text-white">Actions</h4>
                <div className="flex justify-between">
                    <IconButton>
                        <DeleteIcon className="text-white"/>
                    </IconButton>
                    <IconButton>
                        <PlaylistPlayIcon className="text-white"/>
                    </IconButton>
                </div>
                {videos?.map((video, index) => (
                    <VideoInlineCard 
                    key={index}
                    video={video}
                    handleChange={handleChange}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Video

Video.Layout = MainLayout
