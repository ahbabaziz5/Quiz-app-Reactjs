import React from 'react'
import { useLocation } from 'react-router'

const Result = () => {
  const location = useLocation();
  const{score} = location.state 
  console.log(score)
  return (
    <div className='text-black w-full h-screen flex items-center justify-center font-extrabold text-3xl'>
        You Secured <span className='text-indigo-500 px-3'> {score}</span> marks
      
    </div>
  )
}

export default Result
