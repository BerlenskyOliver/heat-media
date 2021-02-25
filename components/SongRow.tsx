import {useState} from 'react'
import IconButton from "@material-ui/core/IconButton"
import {BarsLoader, MoreVertIcon} from 'components/Icons'
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Img from 'next/image'

export interface Props {
    cover: string,
    name: string,
    onClick: () => void
    playlists?: any 
    playing: boolean
}

const SongRow = ({cover, name, onClick, playlists, playing}: Props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (e) => {
        e.stopPropagation()
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        e.stopPropagation()
        setAnchorEl(null);
    }
    // onClick={(e) => addToPlaylist(e, track.id, playlist.name)} 

    return (
        <div 
        className="flex items-center text-white p-2 hover:bg-black hover:bg-opacity-80 cursor-pointer shadow-lg bg-gray-800 rounded m-2 transition-all duration-200"
        onClick={onClick}
        >
            <Img 
            src={cover}  
            width={50}
            height={50}
            className="rounded-full w-12 h-12" alt={name}/>
            <div className="ml-4" >
                {/* <h1>Ovodo</h1> */}
                <p>{name}</p>
            </div>
            <div className="ml-auto"> 
                {playing && <span><BarsLoader className="text-white"/></span>}
                <IconButton onClick={handleClick} className="focus:outline-none">
                    <MoreVertIcon className="text-white"/>
                </IconButton>    
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    {playlists?.map(playlist => (
                        <MenuItem key={playlist.id}>Add to:{" "}{playlist.data.name}</MenuItem>
                    ))}
                </Menu> 
            </div>
        </div>
    )
}

export default SongRow
