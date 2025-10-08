import React from 'react'
import App from '../App'

const Display = ({text}) => {
  return <>
{text ?<p>{text}</p> : <p>0</p> }
  


  </>
}

export default Display
