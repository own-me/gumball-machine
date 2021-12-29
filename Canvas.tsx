import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import GumballMachine from './components/GumballMachine';

const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <pointLight position={[10, 10, 10]} />
            <GumballMachine />
        </ThreeCanvas>
  )
}

export default Canvas;