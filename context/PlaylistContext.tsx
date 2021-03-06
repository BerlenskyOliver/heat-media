import { FC, useMemo, createContext, useReducer, useContext, useEffect } from 'react'
import {database} from "lib/firebase/client"

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


export const PlaylistContext = createContext<State | any>(initialState)

PlaylistContext.displayName = 'PlaylistContext'

function playlistReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_PLAYLIST_VIDEOS':
            return{
                ...state,
                playlistsVideo: action.playlistsVideo
            }
        case 'SET_PLAYLIST_MUSICS':
            return{
                ...state,
                playlistsMusic: action.playlistsMusic
            }
    }
}


export const PlaylistProvider: FC = (props) => {
    const [state, dispatch] = useReducer(playlistReducer, initialState)

    useEffect(() => {
        database.collection('playlists').where('type', '==', 'videos').orderBy('name')
            .onSnapshot(snapshot => {
                dispatch({
                    type: 'SET_PLAYLIST_VIDEOS', 
                    playlistsVideo: snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}))
                }) 
            })
    }, [])

    useEffect(() => {
        database.collection('playlists').where('type', '==', 'musics').orderBy('name')
            .onSnapshot(snapshot => {
                dispatch({
                    type: 'SET_PLAYLIST_MUSICS', 
                    playlistsMusic: snapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}))
                }) 
            })
    }, []) 

    const value = useMemo(
        () => ({
        ...state,

        }),
        [state]
    )

    return <PlaylistContext.Provider value={value} {...props} />
}

export const usePlaylist = () => {
    const context = useContext(PlaylistContext)
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

export const ManagedPlaylistContext: FC = ({ children }) => (
    <PlaylistProvider>
        {children}
    </PlaylistProvider>
)