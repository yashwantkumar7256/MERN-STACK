import React, { useState, useSyncExternalStore, useTransition } from 'react'
import Notes from './Notes'
import { Aperture } from 'lucide-react'

const Form = () => {
  const [tital,Settital]=useState(" ")
  const [detail,Setdetail]=useState(" ")
  const [task,Settask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
     const copyTask=[...task];
     copyTask.push({tital,detail})
    Settask(copyTask)
    console.log(copyTask)
    Setdetail(' ')
    Settital(' ')

    

  }
   const deleteHandler=(idx)=>{
     const copyTask=[...task]
    copyTask.splice(idx,1)
    Settask(copyTask)
   }

  return (
    <>
    <div className=' h-screen lg:flex w-screen   '>
  <form onSubmit={(e)=>{
    submitHandler(e);
  }} >
    
 <div className=' flex  flex-col lg:w-[500]  font-bold  '>
 <input className='m-5 p-5 text-black text-2xlborder-amber-300 bg-white' type="text" placeholder='enter task'
 value={tital}
onChange={(e)=>{
 Settital(e.target.value)

 

}}
/>   

    <textarea className='bg-white text-black  text-2xl h-40 m-5' type="text" placeholder='enter description'
    value={detail} 
    onChange={(e)=>{
     Setdetail(e.target.value)
    }}
    
    />
 
        </div>
        <button className=' font-bold   px-3 rounded-2xl bg-gray-400  text-2xl ml-20  '>add note</button>
       
       </form>
     <div className='flex flex-wrap overflow-auto h-100'>
       {task.map((elem,idx)=>{
       return  <div key={idx} className='w-30 h-50 m-5 bg-white text-2xl text-black flex flex-col justify-between'>{elem.tital} {elem.detail}
       <button onClick={()=>
        deleteHandler(idx)
        } className='mb-3 bg-red-500 text-white '>delete</button>
       </div>
      })}
      </div>
     
       </div>
      
      </>
  )
}

export default Form
 