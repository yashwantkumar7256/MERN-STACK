import { useState } from 'react'

import './App.css'
import Front from './component/Ui'
import Calculator from './component/Calculator'




function App() {
 
  return (
    <>
    
    <div className="text-center text-blue-500 display: flex m-6 justify-between ">yash
      <div className='bg-amber-500'>
        yashwant
      </div>
    <Front title="yash" />
    <Front price="5000" />
    <Calculator num="1"/>
    <Calculator num="2"/>
    
    </div>
    </>
  )
}

export default App
