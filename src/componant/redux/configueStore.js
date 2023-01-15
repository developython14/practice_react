import {createStore} from 'redux';
import { Reducer ,initialState} from './reducer'


export const configueStore=() => {
    const store = createstore(Reducer,initialState)
    return store
}
