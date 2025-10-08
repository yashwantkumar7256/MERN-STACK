import React, { useState,  } from 'react'
import { useRef } from 'react';

const Useref = () => {
    const [value, setvalue]= useState(0);
    const clickedUseref= useRef(0);

    const increseValueState=()=>{
     console.log('useState clicked');
       setvalue(value+1);


  }
  const useRefHandler=()=>{
    console.log('useref clicked')
    clickedUseref.current=(clickedUseref.current+1);

  }

  return <>
  
    <div>
    useState count:{value}
    </div>
    <div> useState count:{clickedUseref.current}</div>

    <button onClick={increseValueState}>useState</button>
    <button onClick={useRefHandler}>useref</button>
    
   
    </>
  
}

export default Useref;
