import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
   let navigate= useNavigate();

  return (
    <div>
        <div className='gap-5 bg-orange-300 '>
        <button onClick={()=>{
        
 navigate('/')
        }
           
        } >Home</button>

        <button onClick={()=>{
            console.log('next'
            )
             navigate(+1)

             } }>
            next</button>

        <button onClick={()=>{ 
            console.log('back')
            navigate(-1)} }>
                back</button>
          </div>
    </div>
  )
}

export default Navbar2
