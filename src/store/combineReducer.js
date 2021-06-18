import {combineReducers} from 'redux'
import * as type from './reducers'
export default combineReducers({
  list: type.changeList
})
