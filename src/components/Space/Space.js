import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Web3 from "web3";
import astrosABI from "../astrosABI.json";
import Time from "../assets/images/time.svg";
import Moon from "../assets/images/moon.png";
import "../../scrollbar.css";

const Space = () => {
  const [data, setData] = useState(["abc", "xxx"]);
  const Web3 = require("web3");
  const astrosABI = require("../astrosABI.json");

  // Create Web3 instance
  const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");

  const contractAddress = "0x52146e2b6D392b9ca54E5083b40c2d693e6Ea769";

  const ipfsstore = new web3.eth.Contract(astrosABI, contractAddress);
  // var data
  let arr = []

  //  console.log("decoded", data);

  // setData(newData)

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    const btn = document.getElementById("btn");
    btn.style.height = "200vh";
    btn.style.overflow = "hidden";
  };


  const getData = () => {
    setData(arr);
  }
  useEffect(() => {
    const get = async () => {
      try {
        const newData = await ipfsstore.methods.retrieveAll().call();
        const newArr = []; // Create a new array to store the values
        newData.forEach((element) => {
          const hexString = element.slice(2);
          const byteArray = new Uint8Array(
            hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
          );
          const jsonString = String.fromCharCode(...byteArray);
          let jsonStr = jsonString.replace(/"({.*})"/g, "$1");
          const obj = JSON.parse(jsonStr);
          newArr.push(obj); // Push values into the new array
        });
        setData(newArr); // Update state with the new array
      } catch (error) {
        // Handle error if needed
        console.error("Error while retrieving data:", error);
      }
    };
    console.log(data);
    get();
  }, []); // Empty dependencies array to ensure the effect is only triggered on mount

  // ... rest of the code


  return (
    <div className="h-[100vh] w-[100vw] bg-location bg-center bg-no-repeat bg-cover">
      <Nav />
      <div className="flex flex-row">
        <p className="text-[6vh] font-inter text-white font-extrabold mt-4 ml-36">
          POEM
        </p>
        <p className="text-[2vh] font-inter text-white ml-[1.5vw] font-bold mt-[6vh]">
          Norad ID - 52939
        </p>
      </div>
      <p className="ml-36 text-xl text-[#D2651C]">NASA</p>
      <img src={Moon} className=" absolute h-[74vh] w-[55vw] ml-[65vw]" />
      <div className="h-[70vh] w-[60vw] scrollable-div">
        <div
          id="btn"
          className="border-[1px] mb-16 overflow-y-scroll border-white w-[50vw] ml-[9.5vw] mt-8 rounded-[30px] bg-spacecard bg-center bg-cover bg-no-repeat h-[60vh]"
        >
          {
            data.map((re) => {

              return (
                <div className="px-[5vw] ">
                  <div className="flex mt-[4vh] flex-row justify-between">
                    <p className="text-white font-bold font-inter">Object Detected</p>
                    <p className="text-white font-inter">{re.time} UTC</p>
                  </div>
                  <div className="flex mt-4 w-[28vw] flex-row justify-between">
                    <p className="text-white text-sm font-inter">Size</p>
                    <p className="text-white text-sm font-inter">Velocity</p>
                    <p className="text-white text-sm font-inter">Location</p>
                  </div>
                  <div className="flex mt-4 w-[30vw] flex-row justify-between">
                    <p className="text-[#D2651C] text-sm font-bold font-inter">
                      {re.size}
                    </p>
                    <p className="text-[#D2651C] text-sm font-bold font-inter">
                      {re.velocity} km/s
                    </p>
                    {re.position && 
                      <p className="text-[#D2651C] text-sm font-bold font-inter">
                      ({re.position.x} , {re.position.y} , {re.position.z})</p>
                    } 
                    
                  </div>
                  <div className="w-[40vw] mt-4 opacity-70 border-[1px] border-white"></div>
                </div>
              )
            })
          }
          {/* {data.map(product => {
              <p>{product}</p>
           })} */}

        </div>
      </div>
    </div>
  );
};

export default Space;
