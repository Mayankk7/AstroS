import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Nav from "../Nav"
import Sat from "../assets/images/Sat.svg"
import axios from 'axios';

const ID = () => {
  const norad = useParams().norad;
  const [satellite,setSatellite] = useState();
console.log(norad)
  const getData = async() => {
    await axios.post('/sat/findSatbyid',{
      norad
    }).then((res)=>{
      console.log(res.data);
      setSatellite(res.data.satellites)
    })
  }

  useEffect(()=>{
    console.log(norad.norad);
    getData();
  },[])
  return (
    <div className='h-[100vh] w-[100vw] bg-[#151515]'>
      <Nav />
      <img src={Sat} className='absolute h-[70vh] ml-[70vw] mt-32' />
      <div className='flex flex-row'>
        <p className='text-[6vh] font-inter text-white font-extrabold mt-8 ml-28'>{satellite?satellite.name:"---"}</p>
        <p className='text-[2vh] font-inter text-white ml-[1.5vw] font-bold mt-[9vh]'>Norad ID - {norad}</p> 
      </div>
      <p className='ml-28 text-xl text-[#D2651C]'>NASA</p>
      <div className='w-[80vw] ml-28 mt-8 absolute'>
        <p className='text-color font-inter text-xl text-white'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
      </div>

      <div className='flex flex-row mt-[20vh] justify-between ml-28 w-[40vw]'>
        <div className='border-2 bg-circle bg-center bg-no-repeat bg-cover rounded-full w-[150px] h-[150px]'>
          <p className='font-meri mt-10 text-sm text-white text-center'>Weight</p>
          <p className='font-meri mt-4 text-md font-bold text-white text-center'>1200 kg</p>
        </div>
        <div className='border-2 bg-circle bg-center bg-no-repeat bg-cover  rounded-full w-[150px] h-[150px]'>
        <p className='font-meri mt-10 text-sm text-white text-center'>Period</p>
        <p className='font-meri mt-4 text-md font-bold text-white text-center'>{satellite?satellite.period:"NA"}</p>
        </div>
        <div className='border-2 bg-circle bg-center bg-no-repeat bg-cover  rounded-full w-[150px] h-[150px]'>
        <p className='font-meri mt-10 text-sm text-white text-center'>Launch</p>
        <p className='font-meri mt-4 text-md font-bold text-white text-center'>{satellite?satellite.launch_date:"NA"}</p>
        </div>
      </div>

      <div className='flex flex-row'>
        <button className='px-8 py-4 bg-center hover:underline bg-cover bg-no-repeat font-bold w-[14vw] mt-12 ml-32 border-[1px] hover:opacity-80 border-white text-lg text-white rounded-lg bg-btnbg'
          onClick={()=>{
            window.location.href=`/location/:${norad.norad}`
          }}
        >Instantaneous Details</button>
        <button
        onClick={()=>{window.location.href="/traffic"}} 
        className='px-8 py-4 bg-center hover:underline bg-cover bg-no-repeat font-bold w-[14vw] mt-12 ml-32 border-[1px] border-white text-lg hover:opacity-80 text-white rounded-lg bg-btnbg'>Space Traffic</button>
        </div>

    </div>
  )
}

export default ID
