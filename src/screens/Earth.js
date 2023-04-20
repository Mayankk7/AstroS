import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const Earth = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Load SVG file
    const loader = new SVGLoader();
    loader.load('../components/assets/images/earth.svg', (data) => {
      // Callback function when SVG is loaded successfully
      // Convert SVG data to texture
      const svgData = new XMLSerializer().serializeToString(data);
      const texture = new THREE.TextureLoader().load(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`, () => {
        // Callback function when texture is loaded successfully
        // Create Earth mesh
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const earth = new THREE.Mesh(geometry, material);

        // Add Earth mesh to the scene
        scene.add(earth);

        // Render the scene
        renderer.render(scene, camera);
      }, undefined, (error) => {
        // Callback function when texture fails to load
        console.error(`Failed to load Earth texture: ${error}`);
      });
    }, undefined, (error) => {
      // Callback function when SVG fails to load
      console.error(`Failed to load SVG file: ${error}`);
    });

    // Add event listener for window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Earth;
