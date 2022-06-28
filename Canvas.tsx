import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import GumballMachine from './components/GumballMachine';
import Floor from './components/Floor';
import Blender from './components/Blender/Blender';

const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <pointLight position={[2, 10, 10]} />
            <Blender />
            {/* <GumballMachine />
            <Floor /> */}
        </ThreeCanvas>
  )
}

export default Canvas;