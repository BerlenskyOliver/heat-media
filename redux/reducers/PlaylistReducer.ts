import * as types from 'redux/Types'

export interface State {
    playlistsVideo: any,
    playlistsMusic: any,
}

const initialState = {
    playlistsVideo: [],
    playlistsMusic: [],   
}

type Action =
    | {
        type: 'SET_PLAYLIST_VIDEOS'
        playlistsVideo: any
        }
    | {
        type: 'SET_PLAYLIST_MUSICS'
        playlistsMusic: any
        }


const playlistReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.SET_PLAYLIST_VIDEOS:
            return{
                ...state,
                playlistsVideo: action.playlistsVideo
            }
        case types.SET_PLAYLIST_MUSICS:
            return{
                ...state,
                playlistsMusic: action.playlistsMusic
            }
        default:
            return state
    }
}

export default playlistReducer