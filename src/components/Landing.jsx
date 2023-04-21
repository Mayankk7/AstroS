import React, { Suspense } from 'react'
import styled from "styled-components"
import {Canvas} from "@react-three/fiber"
import Earth from './Earth';
import Astro from "../components/assets/images/astronaut.svg";
import Right from "../components/assets/images/rightarrow.svg";
const CanvasContainer = styled.div`
  width: 50%;
  margin-left:30vw;
  height: 100%;
  overflow:hidden;
  position:absolute;
  margin-top:15vh;
`;

const ImageOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width:50vw;
  user-select: none;
  height:130vh;
  opacity:0.9;
`;

const Heading1 = styled.p`
  font-family: 'calluna','sans-serif';
  font-size: 25vh;
  position:absolute;
  color:white;
  margin-top:5vh;
  margin-left:47vw;
`

const Heading2 = styled.p`
  font-family: 'calluna','sans-serif';
  font-size: 3.5vh;
  position:absolute;
  color:white;
  margin-top:35vh;
  margin-left:47vw;
`

const Span = styled.span`
  color:#E76A18;
`
const Icon = styled.img`
  position:absolute;
  height:15vh;
  width:15vw;
  margin-top:40vh;
  margin-left:42.5vw;
  opacity:0.5;
  cursor:pointer;

  &:hover{
    opacity:1;
  }
`



const Landing = () => {

  const NextPage = () => {
    window.location.href="/login"
  }

  return (
    <>
    <CanvasContainer>

      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>

    </CanvasContainer>
    
    <ImageOverlay src={Astro}/>
    <Heading1>Astro<Span>S</Span></Heading1>
    <Heading2>Securing our Satellites</Heading2>
    <Icon src={Right} onClick={()=>{NextPage()}}></Icon>
    </>
  )
}

export default Landing