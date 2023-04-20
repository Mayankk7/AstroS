import React, { useState } from 'react'
import Nav from "../Nav"
import Time from "../assets/images/time.svg"
import Moon from "../assets/images/moon.png"
import '../../scrollbar.css'


const Space = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        const btn = document.getElementById('btn');
        btn.style.height="200vh";
        btn.style.overflow="hidden";  
      }

    return (
        <div className='h-[100vh] w-[100vw] bg-location bg-center bg-no-repeat bg-cover'>
            <Nav />
            <div className='flex flex-row'>
                <p className='text-[6vh] font-inter text-white font-extrabold mt-4 ml-36'>POEM</p>
                <p className='text-[2vh] font-inter text-white ml-[1.5vw] font-bold mt-[6vh]'>Norad ID - 52939</p>
            </div>
            <p className='ml-36 text-xl text-[#D2651C]'>NASA</p>
            <img src={Moon} className=' absolute h-[74vh] w-[55vw] ml-[65vw]' />
            <div className='h-[70vh] w-[60vw] scrollable-div'>
            <div id="btn" className='border-[1px] border-white w-[50vw] ml-[9.5vw] mt-8 rounded-[30px] bg-spacecard bg-center bg-cover bg-no-repeat h-[60vh]'>
            <div className='px-[5vw] '>
                <div className='flex mt-[4vh] flex-row justify-between'>
                    <p className='text-white font-bold font-inter'>Object Detected</p>
                    <p className='text-white font-inter'>21:30 UTC</p>
                </div>
                <div className='flex mt-4 w-[28vw] flex-row justify-between'>
                    <p className='text-white text-sm font-inter'>Size</p>
                    <p className='text-white text-sm font-inter'>Velocity</p>
                    <p className='text-white text-sm font-inter'>Time</p>
                </div>
                <div className='flex mt-4 w-[28vw] flex-row justify-between'>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                </div>
                <div className='w-[40vw] mt-4 opacity-70 border-[1px] border-white'></div>
            </div>
            <div className='px-[5vw] '>
                <div className='flex mt-[4vh] flex-row justify-between'>
                    <p className='text-white font-bold font-inter'>Object Detected</p>
                    <p className='text-white font-inter'>21:30 UTC</p>
                </div>
                <div className='flex mt-4 w-[28vw] flex-row justify-between'>
                    <p className='text-white text-sm font-inter'>Size</p>
                    <p className='text-white text-sm font-inter'>Velocity</p>
                    <p className='text-white text-sm font-inter'>Time</p>
                </div>
                <div className='flex mt-4 w-[28vw] flex-row justify-between'>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                    <p className='text-[#D2651C] text-sm font-bold font-inter'>120cm</p>
                </div>
                <div className='w-[40vw] mt-4 opacity-70 border-[1px] border-white'></div>
            </div>
            {
                !clicked &&
                <button
                    onClick={() => { handleClick() }}
                    className='text-white px-4 w-[15vw] rounded-lg mt-10 font-inter hover:border-2 hover:bg-white hover:text-black ml-[17vw] py-2 border-[1px] border-white'>
                    View More
                </button>
            }

        </div>
            </div>

        </div>
    )
}

export default Space
