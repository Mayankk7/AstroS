import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../assets/8k_earth_daymap.jpg";
import { TextureLoader } from "three";

export default function Earth(props) {
  const colorMap = useLoader(TextureLoader, EarthDayMap);

  const earthRef = useRef();

  useFrame(() => {
    // Rotate the Earth mesh
    earthRef.current.rotation.y += 0.001;
  });

  // Set initial rotation on component load
  useEffect(() => {
    // Set the desired initial rotation in radians
    earthRef.current.rotation.x = Math.PI / 5;
    earthRef.current.rotation.y = Math.PI / 22; // Example: set initial rotation to 45 degrees
  }, []);

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[1, 3, 8]} intensity={0.5} />
      <Stars
        radius={300}
        depth={60}
        count={2}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={earthRef} glow={0.5}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshPhongMaterial
          map={colorMap}
          metalness={0.4}
          roughness={0.7}
          flatShading={false}
        />
      </mesh>
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </>
  );
}
