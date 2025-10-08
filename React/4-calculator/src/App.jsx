import React, { useState } from 'react'
import Number from './component/Number'
import Display from './component/Display'
import Button from './component/Button'

const App = () => {
  const [displayVal, setdisplayVal]= useState('');
  return <>
  <h1>calculator</h1>
  <Display text={displayVal}/>
  
  <Number displayVal={displayVal} setdisplayVal={setdisplayVal} />
  
  
  
  
  </>
}

export default App
