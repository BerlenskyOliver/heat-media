import { useSimpleQuery } from "hooks/useDatabase"
import MainLayout from "layouts/MainLayout"
import MainCard from 'components/Card/MainCard'

const Videos = () => {
    const {data: videos, loading} = useSimpleQuery('videos')
    
    return (
        <div>
            <div className="pb-8 flex justify-between">
                <h1 className="text-white text-3xl font-semibold">Videos</h1>             
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-2 gap-6">
                {videos?.map((video, index) => (
                    <MainCard 
                    key={index} 
                    name={video.data.name} 
                    image={video.data.imageSrc} 
                    link={`/videos/${video.data.id}`} 
                    video={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default Videos

Videos.Layout = MainLayout