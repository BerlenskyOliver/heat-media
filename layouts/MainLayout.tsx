import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Navbar from "components/Navbar"
import SearchModal from "components/Modal/SearchModal"
import {getPlaylistVideos, getPlaylistMusics} from 'redux/actions/PlaylistActions'


const Player = dynamic(() => import('components/Player'), {
    ssr: false,
})

const MainLayout = ({children}) => {
    const dispatch = useDispatch()
    const mount = useSelector((state) => state.musics.mount)
    const SearchOpen = useSelector((state) => state.ui.SearchOpen)

    useEffect(() => {
        dispatch(getPlaylistVideos())
        dispatch(getPlaylistMusics())
    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <main className="container mx-auto">
                <div className="pt-6 pb-8">
                    {children}
                </div>
                {mount && <Player/>}
            </main>
            {SearchOpen && <SearchModal/>}
        </div>
    )
}

export default MainLayout
