
import dynamic from 'next/dynamic'
import Navbar from "components/Navbar"
import { useMusic } from 'context/MusicContext'
import { useUI } from 'context/UiContext'
import SearchModal from "components/Modal/SearchModal"

const Player = dynamic(() => import('components/Player'), {
    ssr: false,
})

const MainLayout = ({children}) => {
    const {mount} = useMusic()
    const {SearchOpen} = useUI()

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
