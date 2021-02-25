import { FC, useMemo, createContext, useReducer, useContext, useEffect } from 'react'

export interface State {
    music: any,
    musics: any,
    playing: boolean,
    musicIndex?: number
}

const initialState = {
    music: {},
    musics: [],  
    playing: false,
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
        type: 'SET_PLAYING',
        playing: boolean
    }
    | {
        type: 'SET_MUSIC_INDEX',
        musicIndex: number
    }

export const MusicContext = createContext<State | any>(initialState)

MusicContext.displayName = 'MusicContext'

function musicReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_MUSIC':
            return{
                ...state,
                music: action.music
            }
        case 'SET_MUSICS':
            return{
                ...state,
                musics: action.musics
            }
        case 'SET_MUSIC_INDEX':
            return{
                ...state,
                musicIndex: action.musicIndex
            }
    }

}

export const MusicProvider: FC = (props) => {
    const [state, dispatch] = useReducer(musicReducer, initialState)

    const addMusics  = (musics: any[]) => {
        dispatch({type: 'SET_MUSICS', musics})
    }

    const PlayMusic = (musics: any[], music: any, index: number) => {
        dispatch({type: 'SET_MUSICS', musics})
        dispatch({type: 'SET_MUSIC', music})
        dispatch({type: 'SET_MUSIC_INDEX', musicIndex: index})
        // dispatch({type: 'SET_PLAYING', playing: true})
    }

    const clearQueue = () => {
        dispatch({type: 'SET_MUSICS', musics: []})
        dispatch({type: 'SET_MUSIC', music: {}})
        dispatch({type: 'SET_MUSIC_INDEX', musicIndex: null})
    }
    const value = useMemo(
        () => ({
        ...state,
        addMusics,
        PlayMusic,
        clearQueue
        }),
        [state]
    )

    return <MusicContext.Provider value={value} {...props} />
}

export const useMusic = () => {
    const context = useContext(MusicContext)
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

export const ManagedMusicContext: FC = ({ children }) => (
    <MusicProvider>
        {children}
    </MusicProvider>
)