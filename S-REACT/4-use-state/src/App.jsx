import React, { useState } from 'react'

const App = () => {
   const [num, setName]=useState({name:'yash',age:'19' })
 
  function changeName(){
   const newNum={...num};
  
   newNum.name="yashwant";
   setName(newNum);
  
  }
  function changeAge(){
    var newAge={...num};
    newAge.age='18';
    setName(newAge);
    
  }
  return (
    <>
     <div className="">{num.name} <br />age={num.age}
     </div>
     <button onClick={changeName}>changeName</button>
     <button  onClick={changeAge}>ChangeAge</button>
    </>
  )
}

export default App
