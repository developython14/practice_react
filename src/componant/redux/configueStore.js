import { configureStore } from '@reduxjs/toolkit'
import { Reducer ,initialState} from './reducer'
import {createStore} from 'redux';


export const configueStore=() => {
    const store = createstore(Reducer,initialState)
    return store
}

export default configureStore({
    reducer: {},
    store:cre
  })