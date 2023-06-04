import { CSSProperties } from 'react'
import { Canvas } from '@react-three/fiber'
import { HouseModel } from '../house-model/HouseModel'

export function Background() {
  return <div style={fullScreanBackgroundStyles}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <HouseModel position={[-1.2, 0, 0]} />
      <HouseModel position={[-1.2, 2.3, 1]} />
      <HouseModel position={[1.2, 0, 0]} />
    </Canvas>
  </div>
}

const fullScreanBackgroundStyles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
};
