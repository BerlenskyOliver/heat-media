import { AddIcon} from "components/Icons"
import { usePlaylist } from "context/PlaylistContext"
import PlaylistMusicCard from 'components/Card/PlaylistMusicCard'
import MainLayout from "layouts/MainLayout"
import {useUI} from "context/UiContext"
import IconButton  from '@material-ui/core/IconButton'
import dynamic from 'next/dynamic'

const CreatePlaylistModal = dynamic(() => import('components/Modal/CreatePlaylistModal'), {
    loading: () => <></>,
})

const index = () => {
    const {playlistsMusic} = usePlaylist()
    const {displayCreatePlaylistModal} = useUI()

    return (
        <div className="mt-2 px-2">
            <div className="py-6 flex justify-between">
                <h2 className="text-white font-semibold text-xl">Music Playlists</h2>
                <IconButton 
                className="bg-gray-800 cursor-pointer focus:outline-none"
                onClick={() => displayCreatePlaylistModal({open: true, type: 'musics'})}
                >
                    <AddIcon className="text-white cursor-pointer" />
                </IconButton>
            </div>
            <div className="text-white pb-8 grid grid-cols-1  xsm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
                {/* <h1>Uniquely YOurs</h1> */}
                {playlistsMusic?.map(playlist => (
                    <PlaylistMusicCard 
                    key={playlist.docId} 
                    name={playlist.name} 
                    image={playlist.imageSrc} 
                    description={playlist.description} 
                    link={`/musicplaylists/${playlist.name}`} 
                    />
                ))}
            </div>
        </div>
    )
}

export default index

index.Layout = MainLayout

index.Modal = CreatePlaylistModal