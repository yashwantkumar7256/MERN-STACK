import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'

const Main = (props) => {
    
  return (
    <>
    <div>
    <div className='h-screen bg-  mx-20'>
      <  Navbar/>
       
      <div className=' flex justify-between gap-10'>
      <Section1/>
      <Section2 user={props.user}/>
     </div>
      </div>
      </div>

      

     

     
     
    </>
  )
}

export default Main
