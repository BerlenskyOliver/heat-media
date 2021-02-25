import MainLayout from "layouts/MainLayout"
import {usePlaylist} from "context/PlaylistContext"
import {useUI} from "context/UiContext"
import MainCard from 'components/Card/MainCard'
import {AddIcon} from "components/Icons"
import IconButton  from '@material-ui/core/IconButton'

const index = () => {
    const {playlistsVideo} = usePlaylist()
    const {displayCreatePlaylistModal} = useUI()

    return (
        <div className="mt-2">
            <div className="py-6 flex justify-between">
                <h2 className="text-white font-semibold text-xl">My Playlists Video</h2>
                <IconButton 
                className="bg-gray-800 cursor-pointer focus:outline-none"
                onClick={() => displayCreatePlaylistModal({open: true, type: 'videos'})}
                >
                    <AddIcon className="text-white cursor-pointer" />
                </IconButton>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {playlistsVideo?.map(playlist => (
                    <MainCard key={playlist.id} 
                    name={playlist.data.name}
                    image={playlist.data.imageSrc} 
                    link={`/videoplaylists/${playlist.data.name}`} />
                ))}
            </div> 
        {/* <CreatePlaylistModal open={open} setOpen={setOpen} type="videos" /> */}
        </div>
    )
}

export default index

index.Layout = MainLayout