import React from 'react'
import Number from './Number'

const Button = ({text,onClickHandler}) => {
  return <>
  
  <button onClick={onClickHandler}>{text} </button>
  
 </>
}

export default Button
