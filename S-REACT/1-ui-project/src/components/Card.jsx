import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = (props) => {

  return   <>
 
 
  <div className="card">
    <div className="head">
      
        <img src={props.logo}alt="" />
       <span className='icon'> <  Bookmark /> </span> 
      
      
    </div>
    <div className="middle">
       <div>
        <span className='Amazon'>{props.company} </span> <span className='days' >{props.date}</span>
       </div>
       <div className='designer'>{props.post}</div>
       <div className="partTime">
         <span >part Time</span> <span>{props.time}</span>
       </div>
      </div>
    <div className='line'> </div>
    <div className='footer'>
        <div> <div className="money"> {props.pay} </div>
        <div className='address'>{props.location}</div>
         </div>
         <div className='apply'>Apply Naw</div>
    </div>
   
</div> 
      
    </>
  
}

export default Card
