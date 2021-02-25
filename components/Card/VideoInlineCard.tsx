
interface Props{
    video: any,
    handleChange: (v: any) => void
}
const VideoInlineCard = ({video, handleChange}: Props) => {
    return (
        <div 
        onClick={() => handleChange(video)}
        className="flex justify-between border-bottom px-0 py-2 shadow-lg transition-all duration-200 text-white transform hover:scale-105"> 
        <img src={video.data.imageSrc} 
        className="object-cover rounded-md w-32 h-20"
        alt={video.data.name}
        />
        <div className="ml-2 flex-1">
            <p className="font-semibold text-sm mb-1">
                {video.data.name}
            </p>
        </div>
        </div>
    )
}

export default VideoInlineCard
