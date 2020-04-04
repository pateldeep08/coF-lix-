// Importation de tout les reducers pour les combiner et les mettre dans le store 
import {combineReducers} from 'redux'

import isDBinitReducers from './isDBinitReducers'

const allReducers = combineReducers({
    isDBinit : isDBinitReducers                               //nom (partie gauche) : au choix 
})                                                    // JSX syntaxe isDBinit : isDBinit --> isBDinit


export default allReducers