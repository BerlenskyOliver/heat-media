import {CREATEPLAYLIST} from 'redux/reducers/UiReducer'
import * as types from 'redux/Types'

export const showAlert = (message: string, type?: string) => dispatch => 
    dispatch({
        type: types.DISPLAY_ALERT,
        alert: {open: true, message, type}
    })
    
export const closeAlert = () => dispatch => 
    dispatch({type: types.DISPLAY_ALERT, alert: {open: false, message: ''}})

export const displayCreatePlaylistModal = (CreatePlaylistModal: CREATEPLAYLIST) => dispatch => 
    dispatch({ type: types.DISPLAY_CREATE_PLAYLIST, CreatePlaylistModal})

export const displaySearch = (open: boolean) => dispatch => 
    dispatch({
        type: types.DISPLAY_SEARCH,
        SearchOpen: open
    })
    