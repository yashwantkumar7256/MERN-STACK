import React, { useState } from 'react'
import Number from './component/Number'
import Display from './component/Display'
import Button from './component/Button'
import Useref from './component/5-useref'



const App = () => {

   const [displayVal, setdisplayVal]= useState('');
   return <>
 <h1>calculator</h1>
   <Display text={displayVal}/>
  
  <Number displayVal={displayVal} setdisplayVal={setdisplayVal} />
  
  
  
  <Useref/>
  
  
  
  </>
}

export default App
