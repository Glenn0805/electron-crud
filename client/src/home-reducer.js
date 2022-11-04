import {combineReducers } from '@reduxjs/toolkit'
import timeTrackerReducer from './components/content/time-tracker/time-tracker-reducer'

const rootReducers=combineReducers({
    timeTracker:timeTrackerReducer
})
export default rootReducers