import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { CloseIcon } from 'components/Icons'
import { useUI } from 'context/UiContext';

const AlertMessage = () => {
    const {alert, closeAlert} = useUI()

    const handleClose = (e: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        closeAlert()
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