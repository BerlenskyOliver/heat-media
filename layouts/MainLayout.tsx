
import dynamic from 'next/dynamic'
import Navbar from "components/Navbar"
// import CreatePlaylistModal from 'components/Modal/CreatePlaylistModal'
import Portal from '@reach/portal'
import { useMusic } from 'context/MusicContext'
import Loading from "components/Loading"

const dynamicProps = {
    loading: () => <Loading />,
}

const CreatePlaylistModal = dynamic(() => import('components/Modal/CreatePlaylistModal'), dynamicProps)
const Player = dynamic(() => import('components/Player'), {
    ssr: false,
})

const MainLayout = ({children}) => {
    const {musicIndex} = useMusic()
    
    return (
        <div>
            <Navbar/>
            <main className="container mx-auto">
                <div className="pt-6 pb-8">
                    {children}
                </div>
                {musicIndex && <Player/>}
            </main>
            <Portal>
                <CreatePlaylistModal/>
            </Portal>
        </div>
    )
}

export default MainLayout
