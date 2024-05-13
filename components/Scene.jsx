'use client';
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model';
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei';

function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const Scene = () => {
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className='relative h-svh' >
            {/* <ambientLight intensity={0.5} /> */}
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            {/* <pointLight position={[-10, -10, -10]} /> */}
            <directionalLight position={[-5, -5, -5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.2} pages={2} >
                    <OrbitControls autoRotate minPolarAngle={Math.PI * 2} enablePan={false} enableRotate={false} enableZoom={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}

export default Scene