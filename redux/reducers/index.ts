import { combineReducers } from 'redux'
import musicReducer from "./MusicReducer"
import uiReducer from "./UiReducer"
import playlistReducer from "./PlaylistReducer"

const reducers = {
    musics: musicReducer,
    ui: uiReducer,
    playlists: playlistReducer
}

export default combineReducers(reducers)