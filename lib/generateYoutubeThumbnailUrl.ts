const generateYoutubeThumbnailUrl = (id: string, size: string = 'mq') => {
    return `https://i.ytimg.com/vi/${id}/${size}default.jpg`
}

export default generateYoutubeThumbnailUrl