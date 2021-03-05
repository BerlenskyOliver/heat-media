import {useState} from 'react'
import Link from 'next/link'
import { PlayIcon, PlaylistAddIcon, CheckIcon } from 'components/Icons';
import {usePlaylist} from "context/PlaylistContext"
import s from "./MainCard.module.css"
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image'
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import {useCreate} from "hooks/useDatabase"

interface Props {
    image: string,
    name: string,
    link: string,
    id?: string,
    video?: boolean
}

function VideoCard({image, name, link, id, video = false}: Props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const {create} = useCreate()
    const {playlistsVideo} = usePlaylist()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const SaveVideo = (e, playlistName) => {
        e.preventDefault()
        const data = {
            id: id,
            name: name,
            imageSrc: image
        }
        if(playlistName){
            data['playlist'] = playlistName  
        }
        create('videos', data)
        handleClose()
    }
    
    return (
        <div className={s.MainCard}> 
            <div className="relative rounded-md" >
                <Link href={link}>
                    <a>
                        <Image 
                        src={image}
                        width={520} 
                        height={300} 
                        className="rounded-md object-cover w-full h-48"
                        alt={name} 
                        />
                    </a>
                </Link>
                <h4 className="absolute text-white bottom-2 left-2 text-xl font-semibold">
                    <span>{name}</span>
                </h4>
                {video ? <span 
                className={s.MainCard_Icon_container}>
                    <PlayIcon className={s.MainCard_Icon}/>
                </span> : null}
                <div className="absolute top-1 right-2"> 
                    {video && 
                    <>
                        <IconButton onClick={handleClick}>
                            <PlaylistAddIcon className="text-white addPlaylistIcon"/>
                        </IconButton>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                            <MenuItem ><CheckIcon/>&nbsp;&nbsp;Save</MenuItem>
                            {playlistsVideo?.map(playlist => (
                                <MenuItem onClick={(e) => SaveVideo(e, playlist.data.name)} key={playlist.id}>Add to:{" "}{playlist.data.name}</MenuItem>
                            ))}
                        </Menu>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoCard