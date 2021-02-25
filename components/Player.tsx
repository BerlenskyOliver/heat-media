import {useState} from 'react'
import { useMusic } from 'context/MusicContext'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import Portal from '@reach/portal'

type Playmode = 'order' | 'orderLoop' | 'singleLoop' | 'shufflePlay'
const Player = () => {
    const {musics, musicIndex} = useMusic()

    const options = {
        audioLists: musics,
        defaultPlayIndex: 0,
        // if you want dynamic change current play audio you can change it [type `number` default `0`]
        playIndex: musicIndex !== null ? musicIndex : 0,
        bounds: 'body',
        quietUpdate: false,
        clearPriorAudioLists: false,
        glassBg: true,
        defaultPosition: {
            right: 100,
            bottom: 120,
        },
        remove: false,
        // if you want dynamic change current play mode you can change it
        // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
        // playMode: 'order',
        defaultPlayMode: 'order' as Playmode,
        autoPlay: true,
        // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
        toggleMode: true,
        showMiniModeCover: true,
        // audio playing progress is show of the "mini"  mode
        showMiniProcessBar: false,
        drag: true,
        showProgressLoadBar: true,
        defaultVolume: 0.5,
        // reload button display of the audio player panel   [type `Boolean` default `true`]
        showReload: false,
        showDownload: false,
        // loop button display of the audio player panel   [type `Boolean` default `true`]
        showPlayMode: true,
        showThemeSwitch: false,
        showMediaSession: true,
        showLyric: false,
        // destroy player button display  [type `Boolean` default `false`]
        showDestroy: true,
        // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
        autoHiddenCover: false,
        // Play and pause audio through blank space [type `Boolean` default `false`]
        spaceBar: true,
        responsive: true,
        mobileMediaQuery: '(max-width: 1024px)',
        volumeFade: {
            fadeIn: 1000,
            fadeOut: 1000,
        },
    }

    const [params, setParams] = useState({...options}) 

    const updateParams = (newparams) => {
        const data = {
            ...params,
            ...newparams,
        }
        setParams(data)
    }
    
    return (
        <Portal>
            {musicIndex && 
            <div className="footer">
                <div className="wrapper">
                    <ReactJkMusicPlayer {...options} />
                </div>
            </div>
            }
        </Portal>
    )
}

export default Player
