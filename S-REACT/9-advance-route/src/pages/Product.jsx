import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      
      <div className='m-5 px-5 gap-5 '>
        <Link to='/Product/Men'>Men</Link>
      <Link to='/Product/Women'>Women</Link>
    </div>
      <Outlet/>
    </div>
  )
}

export default Product
