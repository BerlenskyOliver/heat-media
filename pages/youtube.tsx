import {useState} from 'react'
import MainLayout from "layouts/MainLayout"
import FetchApi from 'lib/FetchApi'
import {Spinner, SearchIcon} from "components/Icons"
import MainCard from 'components/Card/MainCard'
import generateYoutubeThumbnailUrl from "lib/generateYoutubeThumbnailUrl"
//ytdl-core youtube-sr

const youtube = () => {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [data, setData] = useState<any>([])

    const search = async (query: string) => {
        setLoading(true)
        const res = await FetchApi(`api/ytsearch?q=${query}`)
        setData(res)
        setLoading(false)
    }

    const handleSearch = (e) => {  
        e.preventDefault() 
        if(input.length > 2){
            search(input)
        }
    }

    return (
        <div>
            <div className="mx-auto my-5">
                <div className="relative mt-3 md:mt-0">
                    <form onSubmit={handleSearch}>
                        <input 
                        type="text"  
                        className="bg-gray-800 rounded-full w-full px-4 pl-8 py-1 focus:outline-none focus:shadow-outline" 
                        placeholder="Search"
                        autoComplete="off"
                        autoFocus={true}
                        autoCapitalize="off"
                        autoCorrect="off"
                        name="q"
                        onChange={(e) => setInput(e.target.value)}
                        />

                        <div className="absolute top-0">
                            <SearchIcon className="fill-current w-4 text-gray-500 mt-2 ml-2"/>
                        </div>
                        {loading && <div className="absolute top-0 right-0 mr-2 my-1">
                            <Spinner className="text-gray-400 w-5"/>
                        </div>}

                    </form>
                </div>
            </div>
            {/* <div className="py-4">
                {input.length > 2 &&
                <h2>Results for: {input}</h2>
                }
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-2 gap-6">
                {data?.videos?.map((video, index) => (
                    <MainCard 
                    key={index} 
                    name={video.title} 
                    image={generateYoutubeThumbnailUrl(video.id)} 
                    link={`/videos/${video.id}`} 
                    video={true}
                    id={video.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default youtube

youtube.Layout = MainLayout