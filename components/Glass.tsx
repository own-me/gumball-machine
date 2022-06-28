import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three';

const Glass
 = (props: any) => {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += 0.005));

    return (
        <group ref={ref} position={[0, -1, 0]}>
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[1.5, 40, 20]} />
                <meshPhysicalMaterial color={'#8ec5d8'} clearcoat={1} opacity={10} ior={1}thickness={2.5} transmission={0.3}/>
            </mesh>   
        </group>
    )
}

export default Glass
;