import {createStore, applyMiddleware} from 'redux'
import reducers from './combineReducer'
import Thunk from 'redux-thunk'

const store = createStore(reducers,applyMiddleware(Thunk))
export default store