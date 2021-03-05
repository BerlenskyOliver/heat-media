import { FC, useMemo, createContext, useReducer, useContext } from 'react'


export interface State {
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
        type: 'DISPLAY_ALERT'
        alert: ALERT | {}
        }
    | {
        type: 'DISPLAY_CREATE_PLAYLIST'
        CreatePlaylistModal: CREATEPLAYLIST
        }
    | {
        type: "DISPLAY_SEARCH",
        SearchOpen: boolean
        }

type ALERT = {message: string, open: boolean, type?: string}
type CREATEPLAYLIST = {open: boolean, type?: string}

export const UIContext = createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
    switch (action.type) {
        case 'DISPLAY_ALERT': {
            return {
                ...state,
                alert: action.alert,
            }
        }
        case 'DISPLAY_CREATE_PLAYLIST': {
            return {
                ...state,
                CreatePlaylistModal: action.CreatePlaylistModal,
            }
        }
        case "DISPLAY_SEARCH": {
            return {
                ...state,
                SearchOpen: action.SearchOpen
            }
        }   
    }
}

export const UIProvider: FC = (props) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)

    const showAlert = (message: string, type?: string) => dispatch({
        type: 'DISPLAY_ALERT',
        alert: {open: true, message, type}
    })
    const closeAlert = () => dispatch({type: "DISPLAY_ALERT",alert: {open: false, message: ''}})

    const displayCreatePlaylistModal = (CreatePlaylistModal: CREATEPLAYLIST) => dispatch({ type: 'DISPLAY_CREATE_PLAYLIST', CreatePlaylistModal})
   
    const displaySearch = (open: boolean) => {
        dispatch({
            type: "DISPLAY_SEARCH",
            SearchOpen: open
        })
    }
    
    const value = useMemo(
        () => ({
        ...state,
        showAlert,
        closeAlert,
        displayCreatePlaylistModal,
        displaySearch
        }),
        [state]
    )
    return <UIContext.Provider value={value} {...props} />
    
}

export const useUI = () => {
    const context = useContext(UIContext)
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

export const ManagedUIContext: FC = ({ children }) => (
    <UIProvider>
        {children}
    </UIProvider>
)