import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MyVideo from './MyVideo'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/video' element={<MyVideo/>}/>
        </Routes>
    </div>
  )
}

export default Router