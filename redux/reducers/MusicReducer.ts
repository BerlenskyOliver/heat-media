import * as types from 'redux/Types'

interface State {
    music: any,
    musics: any,
    mount: boolean,
    musicIndex?: number
}

const initialState = {
    music: {},
    musics: [],  
    mount: false,
    musicIndex: null
}

type Action =
    | {
        type: 'SET_MUSIC',
        music: any
        }   
    | {
        type: 'SET_MUSICS',
        musics: any
        }
    | {
        type: 'SET_MUSIC_INDEX',
        musicIndex: number
    }
    | {
        type: 'SET_MOUNT',
        mount: boolean
    }

const musicReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.SET_MUSIC:
            return{
                ...state,
                music: action.music
            }
        case types.SET_MUSICS:
            return{
                ...state,
                musics: action.musics
            }
        case types.SET_MUSIC_INDEX:
            return{
                ...state,
                musicIndex: action.musicIndex
            }
        case types.SET_MOUNT:
            return{
                ...state,
                mount: action.mount
            }
        default:
            return state
    }
}

export default musicReducer