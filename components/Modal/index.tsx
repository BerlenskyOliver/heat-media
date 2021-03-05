import {CloseIcon} from 'components/Icons'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useUI} from "context/UiContext"

interface Props{
    size: string,
    title: string,
    handleClose: () => void,
    children: any
}

const ModalCore = ({size, title, handleClose, children} : Props) => {
    const {CreatePlaylistModal: stateModal} = useUI()

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
                    <div className={`modal-material-size ${size}`}>
                        <div className="modal-content">
                            <div className="modal-header flex items-center justify-between border-0">
                                <h4 className="modal-title">{title}</h4>
                                <button type="button" className="w-6 h-6 focus:outline-none"  onClick={handleClose}>
                                    <CloseIcon className="text-black"/>
                                </button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalCore
