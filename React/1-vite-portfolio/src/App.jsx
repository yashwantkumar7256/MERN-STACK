import React from 'react'
import Header from './componont/Header';
 import About from './componont/About';
 import Skills from './componont/Skills';
// import img from './componont/photo';
import Pill from './componont/Pill';


function App() {
  const pro=["myntra","flipkart", "my on web"];
  
  return  <>
    <div className='bg-slate-300  '>
   <div className='mx-50 bg-white'>
      <Header/>
      <Skills/>
    <About title="project">
      <Pill title={pro}></Pill>
      </About>
      
       
     

   </div>
          </div>
    </>
  
}

export default App;
