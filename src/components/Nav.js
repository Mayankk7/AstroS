import React from 'react'
import Logo from "./assets/images/astros.svg"
const Nav = () => {
  return (
    <div className='h-[10vh] flex flex-row justify-between'>
    <div className=''>
        <img src={Logo} className='h-[8vh] w-[8vw] mt-3'/>
    </div>
    <div className='flex w-[30vw] font-meri justify-evenly'>
        <div className='mt-8'>
            <a href="#" className=' text-sm text-white'>Satellites</a>
        </div>
        <div className='mt-8'>
            <a href="#" className='text-sm text-white'
                onClick={()=>{localStorage.removeItem('username')
                window.location.href="/login"
            }}
            >Logout</a>
        </div>
    </div>
    </div>
  )
}

export default Nav
