import {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {displayCreatePlaylistModal} from 'redux/actions/UiActions'
import Button from '@material-ui/core/Button';
import { Input } from 'components/Form';
import {useCreate} from 'hooks/useDatabase'
import {getRandomPhoto} from "lib/unsplash"
import ModalCore from "./index"

const CreatePlaylistModal = () => {
    const dispatch = useDispatch()
    const stateModal = useSelector((state) => state.ui.CreatePlaylistModal)
    const {create, loading} = useCreate()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    
    const handleClose = () => {
        dispatch(displayCreatePlaylistModal({open: false}))
        setName('')
        setDescription('')
    }

    const CreatePlaylist = async (e) => {
        e.preventDefault()
        const imageSrc = (await getRandomPhoto()).urls.regular
        create('playlists', {
            name,
            description,
            imageSrc,
            type: stateModal.type
        })
        setName('')
        setDescription('')
        handleClose()
    }

    return (
        <ModalCore
        handleClose={handleClose}
        title={`Create ${stateModal.type} Playlist`}
        size="modal-material-size-sm"
        open={stateModal.open}
        >
            <div className="container">
                <form onSubmit={CreatePlaylist}>
                    <div>
                    <Input
                        name="name" 
                        label="Name of playlist"
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={name}
                        />
                    </div>
                    <div className="mb-2">
                        <Input
                        name="description" 
                        label="Description of playlist"
                        onChange={(e) => setDescription(e.target.value)}
                        defaultValue={description}
                        />
                    </div>
                    <Button type="submit" variant="contained" className="btn-block mt-2 bg-gray-200" onClick={CreatePlaylist}>Create</Button>
                </form>
            </div>
        </ModalCore>          
    )
}

export default CreatePlaylistModal
