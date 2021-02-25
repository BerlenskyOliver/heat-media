import SongRow from "components/SongRow"
import { useMusic } from "context/MusicContext"
import { useSimpleQuery } from "hooks/useDatabase"
import MainLayout from "layouts/MainLayout"
import {usePlaylist} from "context/PlaylistContext"

const index = () => {
    const {data: musics, loading} = useSimpleQuery('musics', 'name', 'asc', false)
    const {PlayMusic, music: playingMusic} = useMusic()
    const {playlistsMusic} = usePlaylist()
    
    return (
        <>
            <div className="pb-8">
                <h1 className="text-white text-3xl font-semibold">Musics</h1>
            </div>
            <div>
                {musics?.map((music, index) => (
                    <SongRow 
                    key={index}
                    name={music.name}
                    cover={music.cover}
                    playlists={playlistsMusic}
                    playing={playingMusic.name === music.name}
                    onClick={() => PlayMusic(musics, music,index)}/>
                ))}
            
            </div>
        </>
    )
}

export default index

index.Layout = MainLayout