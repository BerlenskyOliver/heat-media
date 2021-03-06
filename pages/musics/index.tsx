import { useState, useEffect, useCallback } from 'react'
import SongRow from "components/SongRow"
import { useMusic } from "context/MusicContext"
import { usePaginatedQuery } from "hooks/useDatabase"
import MainLayout from "layouts/MainLayout"
import {usePlaylist} from "context/PlaylistContext"
import Button from "@material-ui/core/Button"

const index = () => {
    const {data, next, load} =  usePaginatedQuery('musics', 'name', 'asc', 100)
    const {PlayMusic, music: playingMusic} = useMusic()
    const {playlistsMusic} = usePlaylist()
    const [musics, setMusics] = useState([])

    useEffect(() => setMusics(mscs => [...mscs, ...data]), [data])

    const loadMore = useCallback(() => load('musics', 'name', 'asc', 100, next), [next])

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
            {next && <div className="text-center">
                <Button variant="contained" className="more_btn" onClick={loadMore}>Load more</Button>
            </div>}
        </>
    )
}

export default index

index.Layout = MainLayout