import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { CSSProperties, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from './Box'
import './Canv.css'

const styles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100wv',
  height: '100hv',
  zIndex: -1
}

const canvasStyles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
};

export function Canv() {
  return <div className="vwfergvergvert" style={canvasStyles}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[-1.2, -2, 1]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </div>
}
