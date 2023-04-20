import React from 'react'
import Nav from "../Nav"
import Card from './Card'
import Arrow from "../assets/images/arrow.svg"

const Home = () => {
    return (
        <div className='bg-homebg bg-center bg-cover bg-no-repeat h-[60vw] w-[100vw]'>
            <Nav />
            <div className=''>
                <div className=''>
                    <p className='text-[5vh] text-white font-inter font-extrabold ml-[6vw] mt-6'>Welcome Back</p>
                    <p className='text-[2.5vh] text-white font-inter ml-[6vw] mt-2'>NASA</p>
                </div>

                <div className='w-[70vw] rounded-xl m-auto border-2 bg-homecard bg-center bg-no-repeat bg-cover  h-[200vh]  text-opacity-100 border-white'>
                    <div className='flex flex-row'>
                        <div className='flex'>
                            <p className="text-white font-inter text-sm font-bold mt-8 ml-16">Total Satellites</p>
                            <p className='text-white font-inter text-lg font-bold mt-7 ml-16'>11</p>
                        </div>
                        <div className='flex ml-16'>
                            <p className="text-white font-inter text-sm font-bold mt-8 ml-16">Working Satellites</p>
                            <p className='text-white font-inter text-lg font-bold mt-7 ml-16'>11</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly mt-8 flex-wrap'>
                            <Card/>
                            <Card/>
                            <Card/>
                    </div>
                    <button className='bg-transparent border-[3px] text-center float-right mr-[4vw] border-white w-[10vw] px-2 py-1 text-sm rounded-lg text-white hover:bg-white hover:text-black ml-16 mt-4'>
                        More Satellites 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
