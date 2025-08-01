import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Toaster } from './camponents/ui/toaster'

const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App