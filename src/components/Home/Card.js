import React from 'react'
import Satellite from "../assets/images/satellite.svg"
const Card = () => {
  return (
    <div className='h-[60vh] mt-8 bg-cardbg bg-center bg-cover bg-no-repeat w-[18vw] border-[1px] border-white rounded-xl'>
    <div className='rounded-full h-[130px] w-[130px] bg-[#E4E4E4] m-auto mt-8 opacity-70'></div>
    <img src={Satellite} className='mt-[-30vh]  h-[40vh] w-[40vw] opacity-90'/>
    <p className='font-inter text-[4vh] text-white font-extrabold text-center '>POEM</p>
    <button className='bg-transparent border-[3px] border-white w-[10vw] px-2 py-1 text-sm rounded-lg text-white hover:bg-white hover:text-black ml-16 mt-4'
        onClick={()=>{window.location.href="/satid"}}
    >More Details</button>
    </div>
  )
}

export default Card
