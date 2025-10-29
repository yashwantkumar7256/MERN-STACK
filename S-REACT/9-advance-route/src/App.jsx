import React from 'react'

import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/women'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Navbar2/>
      

      <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} >
         <Route path='Women' element={<Women/>} />
          <Route path='Men' element={<Men/>} />
          </Route>
          <Route path='/course' element={<Course/>}/>
          <Route path='/course/:id' element={<CourseDetail/>}/>
       
        

        <Route path='*' element={<NotFound/>}/>

       
      </Routes>
    </div>
  )
}

export default App
