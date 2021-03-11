import {useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useDispatch } from 'react-redux'
import {displaySearch} from "redux/actions/UiActions"
import { MenuIcon, CloseIcon, 
MusicIcon, YoutubeIcon, LibraryVideoIcon, 
LibraryMusicIcon, VideoFilesIcon, SearchIcon} 
from 'components/Icons'

const index = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [navOpen, setNavOpen] = useState(false)
    const [dropdown, setDropdown] = useState(true)

    const isActive = (path: string) => router.pathname === path ? 
        "bg-gray-900 text-white" : 'text-gray-300 hover:bg-gray-900 hover:text-white'
    return (
        <nav className="bg-black" >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">        
                        <button 
                        onClick={() => setNavOpen(!navOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className={`${navOpen ? 'hidden' : 'block'} h-6 w-6`}/>
                            <CloseIcon className={`${navOpen ? 'block' : 'hidden'} h-6 w-6`}/>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h4 className="font-semibold text-xl text-green-400"><span className="text-white">Heat</span>Media</h4>                           
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/videos">
                                    <a className={`${isActive('/videos')} px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center`}><VideoFilesIcon className="mr-2"/> Videos</a>
                                </Link>
                                <Link href="/musics">
                                    <a className={`${isActive('/musics')} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center`}>
                                        <MusicIcon className="text-green-500 mr-2"/>Musics
                                    </a>
                                </Link>
                                <Link href="/videoplaylists">
                                    <a className={`${isActive('/videoplaylists')} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center`}>
                                        <LibraryVideoIcon className="text-blue-500 mr-2"/> LibVideos
                                    </a>
                                </Link>
                                <Link href="/musicplaylists">
                                    <a className={`${isActive('/musicplaylists')} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center`}>
                                    <LibraryMusicIcon className="text-purple-500 mr-2"/> LibMusics</a>
                                </Link>
                                <Link href="/youtube">
                                    <a className={`${isActive('/youtube')} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center`}>
                                    <YoutubeIcon className="text-red-500 mr-2"/> Youtube Search</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                        onClick={() => dispatch(displaySearch(true))}
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open Search</span>
                            <SearchIcon className="h-6 w-6"/>                           
                        </button>
                        <div className="ml-3 relative">
                            <div>
                                <button 
                                onClick={() => setDropdown(!dropdown)}
                                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                            <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${dropdown ?'transition ease-in duration-75 hidden ' : 'transition ease-out duration-100'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`sm:hidden ${navOpen ? 'block': 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/videos">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <VideoFilesIcon className="mr-2"/> Videos
                        </a>
                    </Link>
                    <Link href="/videoplaylists">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <LibraryVideoIcon className="text-blue-500 mr-2"/> LibVideos
                        </a>
                    </Link>
                    <Link href="/musicplaylists">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <LibraryMusicIcon className="text-purple-500 mr-2"/> LibMusics
                        </a>
                    </Link>
                    <Link href="/musics">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            <MusicIcon className="text-green-500 mr-4"/>Musics
                        </a>
                    </Link>
                    <Link href="/youtube">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            <YoutubeIcon className="text-red-500 mr-4"/>Youtube Search
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default index
