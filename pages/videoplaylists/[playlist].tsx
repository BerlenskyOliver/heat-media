import {useRouter} from 'next/router'
import MainLayout from "layouts/MainLayout"
import {useWhereQuery} from 'hooks/useDatabase'
import { DeleteIcon } from 'components/Icons'
import IconButton  from '@material-ui/core/IconButton'
import MainCard from 'components/Card/MainCard'

// export const getStaticProps = async () => {
//     return {
//         props: { },
//         revalidate: 3600
//     }
// }

// export async function getStaticPaths() {

//     return {
//         paths: [],
//         fallback: true,
//     }
// }
const Playlist = () => {
    const router = useRouter()
    const {playlist} = router.query
    const {data: videos, loading}  = useWhereQuery('videos', 'playlist', '==', playlist, 'name', 'asc')
    
    return ( 
        <>
            <div className="pb-8 flex justify-between">
                <h1 className="text-white text-3xl font-semibold">{playlist}</h1>
                <IconButton>
                    <DeleteIcon className="text-white cursor-pointer"/>
                </IconButton>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {videos?.map((video, index) => (
                    <MainCard 
                    key={index} 
                    name={video.data.name} 
                    image={video.data.imageSrc} 
                    link={`/videos/${video.data.id}`} 
                    video={true}
                    />
                ))}
            </div>
        </>
    )
}

export default Playlist

Playlist.Layout = MainLayout