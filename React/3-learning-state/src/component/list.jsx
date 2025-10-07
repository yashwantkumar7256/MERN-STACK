import React from 'react'

const Slist = ({studentName}) => {
  return <>
   <ol className='mx-5 mb-5' > {studentName.map(item => <li key={item} >  {item}</li>)}</ol>
  
  
    
    
  </>
}

export default Slist;
