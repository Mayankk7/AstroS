import React, { useState } from 'react'
import Logo from "../assets/images/astros.svg"
import axios from "axios"

const Register = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setcPassword] = useState("");

  const Register = async ()=> {
    if(password != cpassword){
      alert("Confirm Password should be same as Password")
    }
    const obj = {
      username,password
    }

    await axios.post('/signup',obj)
    .then((res)=>{
      if(res.status == 200){
        window.location.href="/home"
      }
    })

  }

  return (
    <div>
    <div className='bg-login-bg bg-center bg-no-repeat bg-cover h-[100vh] w-[100vw] flex flex-row'>
    <div className='w-[50vw]'>
    <img src={Logo} className='ml-16 mt-6'/>
    </div>
    <div className='w-[50vw]'>
      <div className='w-[50vw] bg-[#210931] h-[100vh] opacity-40 absolute'></div>
      <p className='font-inter absolute ml-[18vw] font-extrabold text-white text-[6vh] text-center mt-[10vh]'>Join Us</p>
      <div className='absolute flex flex-col ml-[13vw] mt-[30vh]'>
        <input
        onChange={(e)=>{setUsername(e.target.value)}}
        className='px-8 py-3 focus:outline-none border-2 rounded-lg w-[23vw] border-white font-meri bg-inherit text-white' placeholder='Username' />
        <input
        onChange={(e)=>{setPassword(e.target.value)}}
        className='px-8 py-3 mt-10 focus:outline-none border-2 rounded-lg w-[23vw] border-white font-meri bg-inherit text-white' placeholder='Password' />
        <input
        onChange={(e)=>{setcPassword(e.target.value)}}
        className='px-8 py-3 mt-10 focus:outline-none border-2 rounded-lg w-[23vw] border-white font-meri bg-inherit text-white' placeholder='Confirm Password' />
        </div>
      <p className='font-inter text-white absolute text-sm mt-[65vh] ml-[15.5vw]'>Already have an account ? </p>
      <a href="/login " className='font-inter text-[#008FCC] hover:text-white absolute text-sm mt-[65vh] ml-[27vw]'>Sign In</a>
      <button className='absolute w-[23vw]  mt-[75vh] ml-[13vw] rounded-md font-inter py-4 text-white bg-[#153E73] hover:bg-[#0f2f56] font-extrabold'
        onClick={()=>{Register()}}
      >Sign Up</button>
    </div>

  </div>
    </div>
  )
}

export default Register
