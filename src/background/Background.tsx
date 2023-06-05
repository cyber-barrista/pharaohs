import { CSSProperties, useContext, } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { AppStateContext } from '../state/AppState';
import { ScrollHandler } from './ScrollHandler';
import { toLocation } from './common';
import { HouseModel } from './HouseModel';


export function Background() {
  const { state, setState } = useContext(AppStateContext)
  const modelLocation = toLocation(state.currentHouseModel)

  return <div style={fullScreanBackgroundStyles}>
    <Canvas camera={{ position: [0, 0, 0], rotation: modelLocation.rotation }}>
      <HouseModel houseModel="model-e" />
      <HouseModel houseModel="model-g" />
      <HouseModel houseModel="model-y" />
      <HouseModel houseModel="model-p" />
      <Environment files="scene/sky.hdr" background />
      {/* <Perf position="top-left" /> */}
      <ScrollHandler />
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
