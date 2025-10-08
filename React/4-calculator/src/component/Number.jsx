import React from 'react'
import Button from './Button'
import Display from './Display'

const Number = ({displayVal,setdisplayVal}) => {
    const buttons=["1","2","3","4","5","6","7","8","9","0","."];
    const operaton=["+","-","*","/"];
    const addToDisplay =(text)=>{
       setdisplayVal(displayVal+text);
       
    }
    const Ans=()=>{
        const result=(eval(displayVal));
        setdisplayVal(result);
    }


  return <>
  <Button text="C" onClickHandler={()=>setdisplayVal(' ')}></Button>
  <br />
  {buttons.map(text=><Button key={text} text={text} onClickHandler={()=>addToDisplay(text)} />)}
  <br />
  {operaton.map(text=><Button key={text} text={text} onClickHandler={()=>addToDisplay(text)}/>)}
  <Button text="=" onClickHandler={Ans}  />
  </>
}

export default Number
