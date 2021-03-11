import * as types from 'redux/Types'

interface State {
    alert: ALERT | {}
    CreatePlaylistModal: CREATEPLAYLIST,
    SearchOpen: boolean
}

const initialState = {
    alert: {},
    CreatePlaylistModal: {open:false},
    SearchOpen: false
}

type Action =
    | {
        type: 'DISPLAY_ALERT',
        alert: ALERT | {}
        }
    | {
        type: 'DISPLAY_CREATE_PLAYLIST',
        CreatePlaylistModal: CREATEPLAYLIST
        }
    | {
        type: 'DISPLAY_SEARCH',
        SearchOpen: boolean
        }

export type ALERT = {message: string, open: boolean, type?: string}
export type CREATEPLAYLIST = {open: boolean, type?: string}


const uiReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.DISPLAY_ALERT: {
            return {
                ...state,
                alert: action.alert,
            }
        }
        case types.DISPLAY_CREATE_PLAYLIST: {
            return {
                ...state,
                CreatePlaylistModal: action.CreatePlaylistModal,
            }
        }
        case types.DISPLAY_SEARCH: {
            return {
                ...state,
                SearchOpen: action.SearchOpen
            }
        }   
        default:
            return state
    }
}

export default uiReducer