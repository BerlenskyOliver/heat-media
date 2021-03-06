import {useRouter} from 'next/router'
import MainLayout from "layouts/MainLayout"
import {useWhereQuery} from 'hooks/useDatabase'
import IconButton  from '@material-ui/core/IconButton'
import { PlayIcon, MoreHorizIcon } from 'components/Icons'
import SongRow from 'components/SongRow'
import { useMusic } from "context/MusicContext"

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
    const {playlist: p} = router.query
    
    const {data: playlist}  = useWhereQuery('playlists', 'name', '==', p)
    
    const {data: musics}  = useWhereQuery('musics', 'playlist', '==', playlist?.[0]?.name, 'name', 'asc')
    
    const {PlayMusic, music: playingMusic} = useMusic()
    
    return (
        <div className="overflow-hidden text-white p-4" >
            <div className="flex items-center justify-center">
                <img 
                src={playlist?.[0]?.imageSrc} 
                alt={playlist?.[0]?.name} 
                className="rounded-md w-72 h-72 object-cover"/>
                <div className="flex-grow flex-shrink ml-8">
                        <p className="text-4xl font-semibold pb-2">PLAYLIST</p>
                        <h2 className="text-2xl font-semibold pb-2 text-green-500">{playlist?.[0]?.name}</h2>
                        <p className="text-xl">{playlist?.[0]?.description}</p>
                </div>

            </div>
            <div>
                <div className="player_icons">
                    <PlayIcon className="my-4 w-16 h-16 text-green-500 mr-2 transform hover:scale-110 transition-all duration-300"/>
                    <IconButton>
                        <MoreHorizIcon className="text-white"/>
                    </IconButton>
                </div>
                <div>
                    {musics?.map((music, index) => (
                        <SongRow 
                        key={index} 
                        name={music.name}
                        cover={music.cover}
                        playing={playingMusic.name === music.name}
                        onClick={() => PlayMusic(musics, music, index)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Playlist

Playlist.Layout = MainLayout