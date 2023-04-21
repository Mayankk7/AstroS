import React, { useState } from 'react'
import Logo from "../assets/images/astros.svg"
import axios from "axios"

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const Login = async() => {
      const obj = {
        username,password
      };
      // console.log(obj)

      await axios.get('/login',obj)
      .then((res)=>{
        console.log(res);
        if(res.data.data==="No User Found"){
          alert("Wrong Credentials");
        }
        else{
          localStorage.setItem('username',res.data.data.username)
          window.location.href="/home"
        }
      })

  }

  return (
    <div className='bg-login-bg bg-center bg-no-repeat bg-cover h-[100vh] w-[100vw] flex flex-row'>
      <div className='w-[50vw]'>
      <img src={Logo} className='ml-16 mt-6'/>
      </div>
      <div className='w-[50vw]'>
        <div className='w-[50vw] bg-[#210931] h-[100vh] opacity-40 absolute'></div>
        <p className='font-inter absolute ml-[18vw] font-extrabold text-white text-[6vh] text-center mt-[15vh]'>Welcome</p>
        <div className='absolute flex flex-col ml-[13vw] mt-[35vh]'>
          <input 
          onChange={(e)=>{setUsername(e.target.value)}}
          className='px-8 py-3 focus:outline-none border-2 rounded-lg w-[23vw] border-white font-meri bg-inherit text-white' placeholder='Username' />
          <input
          onChange={(e)=>{setPassword(e.target.value)}}
          className='px-8 py-3 mt-10 focus:outline-none border-2 rounded-lg w-[23vw] border-white font-meri bg-inherit text-white' placeholder='Password' />
        </div>
        <p className='font-inter text-white absolute text-sm mt-[61vh] ml-[15.5vw]'>Don't have an account? </p>
        <a href="/register " className='font-inter text-[#008FCC] hover:text-white absolute text-sm mt-[61vh] ml-[26vw]'>Sign Up</a>
        <button className='absolute w-[23vw]  mt-[70vh] ml-[13vw] rounded-md font-inter py-4 text-white bg-[#153E73] hover:bg-[#0f2f56] font-extrabold'
          onClick={()=>{Login()}}
        >Sign In</button>
      </div>

    </div>
  )
}

export default Login
