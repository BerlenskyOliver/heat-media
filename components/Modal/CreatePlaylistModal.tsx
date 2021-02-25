import {useState} from 'react'
import Button from '@material-ui/core/Button';
import {CloseIcon} from 'components/Icons'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Input } from 'components/Form';
import {useUI} from "context/UiContext"
import {useCreate} from 'hooks/useDatabase'

const CreatePlaylistModal = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const {CreatePlaylistModal: stateModal, displayCreatePlaylistModal} = useUI()
    const {create} = useCreate()

    const handleClose = () => {
        displayCreatePlaylistModal({open: false})
        setName('')
        setDescription('')
    }

    const CreatePlaylist = (e) => {
        e.preventDefault()
        create('playlists', {
            name,
            description,
            type: stateModal.type
        })
        setName('')
        setDescription('')
    }

    return (
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal-material"
            open={stateModal.open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={stateModal.open}>
                <div role="document" className="outline-none">
                    <div className="modal-material-size modal-material-size-sm">
                        <div className="modal-content">
                            <div className="modal-header flex items-center justify-between border-0">
                                <h4 className="modal-title">Create {stateModal.type} Playlist</h4>
                                <button type="button" className="w-6 h-6 focus:outline-none"  onClick={handleClose}>
                                    <CloseIcon className="text-black"/>
                                </button>
                            </div>
                            <div className="modal-body">
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
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default CreatePlaylistModal
