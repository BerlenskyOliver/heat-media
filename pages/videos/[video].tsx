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
    const {data: video, loading} = useWhereQuery('videos', 'id', '==', videoId)
    const {data: videos, loading: loadingPlaylist}  = useWhereQuery('videos', 'playlist', '==', video[0]?.data?.playlist, 'name', 'asc')

    useEffect(() => setActualVideo(video[0]), [video])

    const url =`https://www.youtube.com/embed/${videoId}`;
    const handleChange = (video: any) => setActualVideo(video)

    return (
        <>
        <div className="pb-8">
            <h1 className="text-white text-3xl font-semibold">{actualVideo?.data?.name}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
            <div className="col-span-2 pb-3">
                <iframe width="100%" height="330px" className="rounded-lg" title="youtube video"
                    src={url} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                {actualVideo && <div className="my-4 py-4 text-white border-b border-t border-gray-700">
                    <p className="text-xl font-semibold">{actualVideo?.data?.name}</p>
                    {actualVideo?.data?.playlist ? <span className="text-lg">In playlist :  {actualVideo?.data?.playlist}</span>: null}
                    {actualVideo?.data?.timestamp ? <p>Publier le : {dayjs.unix(actualVideo?.data?.timestamp.seconds).fromNow()}</p> : null }
                </div>}
            </div>
            <div className="col-span-1">
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
