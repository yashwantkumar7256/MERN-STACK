import React, { useState } from 'react'

const Card = () => {
    const [tital, SetTital]=useState('')
     const [dis, SetDis]=useState('')
     const [task, Settask]=useState([])

    const submitHandler=(e)=>{
        e.preventDefault()
        const copyTask=[...task];
        copyTask.push({tital,dis})
        Settask(copyTask)
         console.log(copyTask)
       

        SetTital(' ')
        SetDis(' ')
    }
  return (
    <div>
        <form onSubmit={(e)=>{
         submitHandler(e)
        }}>
        <div className='text-2xl bg-white flex flex-col text-black  '>
            <input className=' m-5' type="text" placeholder='tital' 
            value={tital} 
            onChange={function(e){
                SetTital(e.target.value)
            }} />

            <textarea value={dis} onChange={(e)=>{
                SetDis(e.target.value)
            }}  placeholder='description'></textarea>
            <button>add note</button>
        </div>
        </form>
        <div className='h-70 w-70 bg-amber-50'>
      <div className='bg-red-500 h-34 w-20 m-10'></div>
      </div>
    </div>
  )
}

export default Card
