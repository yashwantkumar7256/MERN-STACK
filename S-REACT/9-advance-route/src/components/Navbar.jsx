import React from 'react'
import {Link, Route,Routes} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className=' bg-amber-200 py-5 flex justify-between px-10'>
        <h2 className='font-bold text-2xl'> Dolu</h2>
       <div className='flex gap-10 font-bold'>
      <Link to="/" > Home</Link>
     <Link to="/about" > About</Link> 
     <Link to="/product" > product</Link>
     <Link to="/course" >course</Link>
     
     
       </div>
      </div>
    </div>
  )
}

export default Navbar
