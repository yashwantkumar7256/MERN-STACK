import React from 'react'
import Card from './Card'

const Section2 = (props) => {
  console.log(props.user)
  return (
    <div id='scroll' className=' flex h-140  flex-row   overflow-auto  min-w-2/3   gap-10 '>
     {props.user.map(function(val){
        return <Card img={val.img} text={val.text}/>
     })}
     
     
   
      
    </div>
  )
}

export default Section2
