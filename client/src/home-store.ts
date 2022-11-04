import {configureStore} from '@reduxjs/toolkit'
import thunk from 'react-redux'
import rootReducers from './home-reducer'

const middlewares:any =[thunk]
let store:any
let tryToCreateStore =()=>(
        configureStore({
            reducer:rootReducers,
            middleware:middlewares
        })
        )

store = tryToCreateStore()


export default store