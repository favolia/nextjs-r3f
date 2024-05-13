'use client';
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model';
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei';
import { LuCircleDashed } from "react-icons/lu";

function Loader() {
    const { progress, active } = useProgress()
    return <Html center className='flex justify-center items-center gap-x-2 text-xl text-white'>
        <LuCircleDashed size={30} className='animate-spin' />
        <p>
            {progress.toFixed(1)}
        </p>
    </Html>
}

const Scene = () => {
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} >
            {/* <ambientLight intensity={0.5} /> */}
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            {/* <pointLight position={[-10, -10, -10]} /> */}
            {/* <directionalLight intensity={4} /> */}
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.2} pages={0} >
                    <OrbitControls makeDefault autoRotate maxPolarAngle={Math.PI} enablePan={false} enableRotate={true} enableZoom={true} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}

export default Scene