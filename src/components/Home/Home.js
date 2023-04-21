import React, { useRef, useState, useEffect } from 'react'
import Nav from "../Nav"
import Card from './Card'
import Arrow from "../assets/images/arrow.svg"
import axios from 'axios'

const Home = () => {
    // Create a ref for the container div

    const [satellites,setSatellites] = useState([]);

    const getData = async()=>{
        let username = localStorage.getItem('username');
        await axios.get(`sat/findSats?username=${username}`)
        .then((res)=>{
            console.log(res.data);
            setSatellites(res.data.satellites);
        })

        console.log(satellites);

    }

    useEffect(()=>{
        getData();
    },[])


    return (
        <div className='bg-homebg bg-center bg-cover overflow-hidden bg-no-repeat h-[60vw] w-[100vw]'>
            <Nav />
            <div className=''>
                <div className=''>
                    <p className='text-[5vh] text-white font-inter font-extrabold ml-[6vw] mt-6'>Welcome Back</p>
                    <p className='text-[2.5vh] text-white font-inter ml-[6vw] mt-2'>NASA</p>
                </div>

                <div id="btn" className='w-[70vw] overflow-y-scroll rounded-xl m-auto border-2 bg-homecard bg-center bg-no-repeat bg-cover mb-16 h-fit  text-opacity-100 border-white'>
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
                    <div className='flex flex-row mb-16 justify-evenly mt-8 flex-wrap'>
                    {
                        satellites.map((sat)=>{
                         return (
                             <Card name={sat.name} norad={sat.norad}/>
                         )
                        })
                     }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
