import { UPDATE_NICK_NAME } from "../actions/nickname"; 
import {combineReducers} from 'redux'

const update =(stateDefault='', action) =>{
    switch(action.payload){
        case UPDATE_NICK_NAME:
            return action.payload
        default:
            return stateDefault
    }
}
 export default combineReducers({
     update
 })