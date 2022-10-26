import React from 'react'
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom'
import HomeLayoutContainer from './HomeLayoutContainer'
const AppLayout = () => {
    return (
        <Routes>
            <Route path="/" name="Main" element={<HomeLayoutContainer />} />
        </Routes>
    )
}

export default AppLayout