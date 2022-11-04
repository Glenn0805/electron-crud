import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducers from './home-reducer'

const middlewares = [thunk]
let store
let tryToCreateStore = () => (
    configureStore({
        reducer: rootReducers,
        middleware: middlewares
    })
)

store = tryToCreateStore()


export default store