import { Contact, Home } from 'lucide-react'
import React from 'react'
 import {  Route, Routes } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div id='header'>
        <h2>Yashwant</h2>
        <nav className='flex justify-between'>
            <a href="/">Home</a>
            <a href="/about">about</a>
            <a href="/contact">contact</a>
        </nav>
        
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
