import React from 'react'
import { useAuth } from '../Context/context'

const Navbar = () => {
  const {logout,userData}=useAuth()
  
  return (
    <nav className='w-full h-16 bg-indigo-500 flex justify-between items-center px-5 text-white sticky top-0'>
      <div>Logo</div>
      <div className='flex gap-10 items-center'>
        {
          userData ? (<h4 className=''>{userData.firstName}</h4>):""
        }
        {/* <h4 className=''>username</h4> */}
    <button className=' p-1 bg-indigo-400' onClick={logout}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar
