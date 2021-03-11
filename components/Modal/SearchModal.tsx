import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {displaySearch} from "redux/actions/UiActions"
import s from './SearchModal.module.css'
import {SearchIcon, Spinner} from "components/Icons"
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Portal from '@material-ui/core/Portal';

const SearchModal = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [q, setQ] = useState<string>('')

    return (
        <Portal>
            <div className={s.search_modal}>
                <ClickAwayListener onClickAway={() => dispatch(displaySearch(false))}>
                    <form className={s.search_modal_input}>
                        <input 
                        type="text" 
                        name="q" 
                        autoFocus={true}
                        autoComplete="off" 
                        autoCapitalize="off"
                        onChange={(e) => setQ(e.target.value)}
                        autoCorrect="off"
                        placeholder="Rechercher un contenu..."
                        />
                        <button type="submit" className={s.search_modal_input_button}>
                            <SearchIcon className="w-5 h-5"/>
                        </button>
                        {loading && 
                        <div className={s.search_modal_spinner}>
                            <Spinner className="text-white"/>
                        </div>
                        }
                        <ul className={`${s.search_modal_suggestions} search_modal_suggestions`}>
                            <li>
                                <a href="#">
                                    <span className={s.search_modal_suggestions_category }>videos</span>
                                    <span><em>Daba</em>by Videos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={s.search_modal_suggestions_category }>musics</span>
                                    <span>Dababy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={s.search_modal_suggestions_category }>playlists</span>
                                    <span>Dababy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={s.search_modal_suggestions_category }>videos</span>
                                    <span>Dababy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span >Voir tous les Resultats</span>
                                
                                </a>
                            </li>
                        </ul>
                    </form> 
                </ClickAwayListener>                    
            </div>
        </Portal>
    )
}

export default SearchModal
