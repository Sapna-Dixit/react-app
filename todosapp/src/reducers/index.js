import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './VisiblityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})
