import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    let prams=useParams();
   console.log(prams.id)
    
  return (
    <div>
      <h1>{prams.id} course datails</h1>
    </div>
  )
}

export default CourseDetail
