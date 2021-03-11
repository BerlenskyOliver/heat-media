import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {closeAlert} from 'redux/actions/UiActions'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { CloseIcon } from 'components/Icons'

const AlertMessage = () => {
    const dispatch = useDispatch()
    const alert = useSelector((state) => state.ui.alert)

    const handleClose = (e: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeAlert())
    }

    return (
        <div className="pt-5">
            <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={alert?.open || false}
            autoHideDuration={5000} 
            message={alert?.message}
            onClose={handleClose}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon className="text-white" />
                </IconButton> 
            }
            />
        </div>
    )
}

export default AlertMessage