import {database} from "lib/firebase/client"
import * as types from 'redux/Types'

export const getPlaylistVideos = () => dispatch => {
    database.collection('playlists').where('type', '==', 'videos').orderBy('name')
        .onSnapshot(snapshot => {
            dispatch({
                type: types.SET_PLAYLIST_VIDEOS, 
                playlistsVideo: snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}))
            }) 
        })
}

export const getPlaylistMusics = () => dispatch => {
    database.collection('playlists').where('type', '==', 'musics').orderBy('name')
        .onSnapshot(snapshot => {
            dispatch({
                type: types.SET_PLAYLIST_MUSICS, 
                playlistsMusic: snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}))
            }) 
        })
}