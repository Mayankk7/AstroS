import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav";
import Card from "./Card";
import Arrow from "../assets/images/arrow.svg";
import axios from "axios"
import Web3 from "web3";

 //Check if MetaMask is installed
 if (window.ethereum) {
   const web3 = new Web3(window.ethereum);

   // Request account access if needed
   window.ethereum
     .request({ method: "eth_requestAccounts" })
     .then(() => {
       // Accounts now exposed
       web3.eth.getAccounts((error, accounts) => {
         if (error) {
           console.error(error);
         } else {
           console.log("Connected to MetaMask with account:", accounts[0]);
           // Do something with the connected account
         }
       });
     })
     .catch((error) => {
      console.error(error);
     });
 } else {
   console.error("Please install MetaMask to use this application.");
 }

const Home = () => {
  // Create a ref for the container div
  let username = localStorage.getItem('username');
    const [satellite,setSatellite] = useState([]);
    const getData = async() => {
        

        await axios.get(`/sat/findSats?username=${username}`)
        .then((res)=>{
            setSatellite(res.data.satellites)
        })

    }

    useEffect(()=>{
        getData()
    },[])

  const [clicked, setclicked] = useState(false);
  const handleMoreSatellitesClick = () => {
    const btn = document.getElementById("btn");
    btn.style.height = "200vh";
    const btn1 = document.getElementById("btn1");
    setclicked(true);
  };

  return (
    <div className="bg-homebg bg-center bg-cover bg-no-repeat h-[60vw] w-[100vw]">
      <Nav />
      <div className="">
        <div className="">
          <p className="text-[5vh] text-white font-inter font-extrabold ml-[6vw] mt-6">
            Welcome Back
          </p>
          <p className="text-[2.5vh] text-white font-inter ml-[6vw] mt-2">
            {username}
          </p>
        </div>

        <div
          id="btn"
          className="w-[70vw] overflow-y-scroll rounded-xl m-auto border-2 bg-homecard bg-center bg-no-repeat bg-cover  h-[70vh]  text-opacity-100 border-white"
        >
          <div className="flex flex-row">
            <div className="flex">
              <p className="text-white font-inter text-sm font-bold mt-8 ml-16">
                Total Satellites
              </p>
              <p className="text-white font-inter text-lg font-bold mt-7 ml-16">
                {satellite.length}
              </p>
            </div>
            <div className="flex ml-16">
              <p className="text-white font-inter text-sm font-bold mt-8 ml-16">
                Working Satellites
              </p>
              <p className="text-white font-inter text-lg font-bold mt-7 ml-16">
                {satellite.length}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly mt-8 mb-16 flex-wrap">
            {
                satellite.length > 0 ?
                    satellite.map((sat)=>{
                        return (
                            <Card name={sat.name} norad={sat.norad}/>
                        )
                    })
                    :
                    <h1 className="text-xl text-white">No Satellites Found</h1>
                
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;