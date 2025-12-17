import React, { useState } from 'react'
import Slist from './component/list'


function App() {
  const [studentarr,setStudentarr]= useState(["yashwnat","yash","raj","nitesh","shailesh","kumar" ]);
  console.log(studentarr);

 
  
  const onChangeHandler = (event) => {
    if(event.key ==="Enter"){
      // console.log(event.target.value);
      const newArr= [event.target.value,...studentarr ];
      event.target.value='';
  
    setStudentarr(newArr);
   
    }
   }

   
  
   return <>
    <h1>  hello</h1>
    <Slist studentName={studentarr}></Slist>
    
   <input type="text" placeholder='enter student name' onKeyDown={onChangeHandler} />
   
 </>
}

export default App

