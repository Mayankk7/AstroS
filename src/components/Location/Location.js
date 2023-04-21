import React, { useState } from 'react';
import Nav from '../Nav';
import { Map, Marker } from 'pigeon-maps';
import Mark from '../assets/images/marker.svg';
import { osm } from 'pigeon-maps/providers'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import data from './dummy'

const Location = () => {
  const [center, setCenter] = useState([50.87, 4.69]);
  const [zoom, setZoom] = useState(2);
//   const [markerPosition, setMarkerPosition] = useState([50.87, 4.69]);
//   const [utc, setUtc] = useState("NA")
//   const [lat, setLat] = useState("NA")
//   const [long, setLong] = useState("NA")
//   const [alt, setAlt] = useState("NA")
//   const [speed, setSpeed] = useState("NA")
//   const [ra, setRa] = useState("NA")
//   const [dec, setDec] = useState("NA")
//   axios({
//     method: 'post',
//     url: 'http://localhost:8000/sat/satLocation',
//     data: {"norad": norad.norad}

// })
// .then((response) => {
//     console.log(response)
//     console.log(response.data)
//     setUtc(response.data.utc)
//     setLat(response.data.lat)
//     setLong(response.data.long)
//     setAlt(response.data.alt)
//     setSpeed(response.data.speed)
//     setRa(response.data.rightAscension)
//     setDec(response.data.declination)
//     setMarkerPosition([lat,long])
// })
// .catch((error) => {
//     console.log("XXX",error)
// })

const norad = useParams();
const randomIndex = Math.floor(Math.random() * data.length);
const randomData = data[randomIndex];

  return (
    <div className='h-[100vh] w-[100vw] bg-location bg-center bg-no-repeat bg-cover'>
      <Nav />
      <div className='flex flex-row'>
        <p className='text-[6vh] font-inter text-white font-extrabold  ml-36'>Poem</p>
        <p className='text-[2vh] font-inter text-white ml-[1.5vw] font-bold mt-[4vh]'>Norad ID - {norad.norad}</p>
      </div>
      <p className='ml-36 text-xl text-[#D2651C]'>NASA</p>
      <div className='w-[60vw] border-[1px] border-white flex flex-row h-[70vh] rounded-lg m-auto'>
        <div className='w-[30vw]'>
          <Map
            height={600}
            provider={osm}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
              setCenter(center);
              setZoom(zoom);
            }}
          >
            {/* Marker component with anchor prop set to markerPosition */}
            <Marker anchor={[randomData.long,randomData.lat]}>
              {/* Image source set to Mark */}
              <img src={Mark} alt='Satellite' className='w-[6vw] h-[6vh]' />
            </Marker>
          </Map>
        </div>

        <div className='w-[30vw] px-28 py-16'>
        <div className='flex flex-row justify-between'>
            <p className='text-white font-bold text-md font-inter'>UTC</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.utc}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Latitude</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.lat}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Longitude</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.long}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Altitude (km)</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.alt}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Speed (km/s)</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.speed}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Right Ascension</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.ra}</p>
        </div>
        <div className='flex flex-row mt-8 justify-between'>
            <p className='text-white font-bold text-md font-inter'>Declination</p>
            <p className='text-white font-bold text-md font-inter'>{randomData.dec}</p>
        </div>
        
            
        </div>
      </div>
    </div>
  );
};

export default Location;
