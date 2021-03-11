import * as types from 'redux/Types'

export const addMusics  = (musics: any[]) =>  dispatch => dispatch({type: types.SET_MUSICS, musics})

export const PlayMusic = (musics: any[], music: any, musicIndex: number) => dispatch => {
        dispatch({type: types.SET_MUSICS, musics})
        dispatch({type: types.SET_MUSIC, music})
        dispatch({type: types.SET_MUSIC_INDEX, musicIndex})
        dispatch({type: types.SET_MOUNT, mount: true})
}

export const clearQueue = async () => dispatch => {
        dispatch({type: types.SET_MOUNT, mount: false})
        dispatch({type: types.SET_MUSIC, music: {}})
        dispatch({type: types.SET_MUSIC_INDEX, musicIndex: null})
        dispatch({type: types.SET_MUSICS, musics: []})
}