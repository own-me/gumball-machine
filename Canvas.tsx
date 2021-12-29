import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import Box from './components/Box';

const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </ThreeCanvas>
  )
}

export default Canvas;