import React from 'react'

const Navbar = () => {
  return (
     <div className='nav flex bg-pink-600 h-10 p-2 text-white justify-between text-center'>
     <span className='ml-10 font-bold text-xl cursor-pointer hover:font-light'>ActivityManager</span>
     <div className='flex gap-5 justify-centre mr-10 font-semibold'>
      <div className='cursor-pointer hover:font-light'>Home</div>
      <div className='cursor-pointer hover:font-light'>Activity</div>
     </div>
    </div>
    )
}

export default Navbar