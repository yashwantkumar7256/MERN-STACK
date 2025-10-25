import React from 'react'
import { MoveRight } from 'lucide-react';



const Card = (props) => {
  return (
    <>
    <div className='h-full shrink-0  w-80 overflow-hidden relative  rounded-4xl '>
       <img className='h-full w-full object-cover ' src={props.img} alt="" /> 
       <div className=' absolute top-0 flex flex-col justify-between left-0 h-full w-full p-10 '>
        <h2 className='bg-amber-50 rounded-full h-10 w-10 flex justify-center object-center p-1 '> 1</h2>
        <div className='pt-30 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elie odit optio aut magni ab ipsam repellendus? Fugit, debitis?</div>
        <div className='flex justify-between'> 
            <span className='bg-blue-400 h-7 w-25 text-white rounded-xl justify-cente align-middle px-2 tracking-wider '>{props.text}</span>
            <h1 className=" bg-blue-400 w-10 rounded-xl px-2 "><MoveRight /></h1>
       </div>
       </div>
    </div>
    
    </>
  )
}

export default Card
