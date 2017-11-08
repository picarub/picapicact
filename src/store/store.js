import { createStore, combineReducers } from 'redux'
import  musicStore  from './musicStore'
import akbPostStore from './akbPostStore'

let allState = combineReducers({ musicStore, akbPostStore })
let store = createStore(allState)

export default store
