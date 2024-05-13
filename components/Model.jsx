import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Group } from 'three'

useGLTF.preload('/3d/frank.glb')

export default function Model() {
    /** @type {Group}*/
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/3d/frank.glb')
    return (
        <group
            ref={group}>
            <primitive object={scene} />
        </group>
    )
}