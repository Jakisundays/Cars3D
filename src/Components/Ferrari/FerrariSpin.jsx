import { CubeCamera, Environment, Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Ferrari from './Ferrari'

const FerrariSpin = () => {
  return (
    <>
    <Loader />
        <Canvas shadows>
        <Suspense fallback={null}>
            <PerspectiveCamera
            makeDefault
            fov={65}
            position={[2,1,3]}
            />

            {/* <ambientLight
            color={'#fff'}
            intensity={5}
            /> */}

<spotLight 
        color={[1,0.25,0.7]}
        intensity={6}
        angle={0.6}
        // Porcentaje del cono de foco que se atenúa debido a la penumbra.
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        />

        <spotLight
        color={[0.14, 0.5, 1]}
        intensity={4}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        />

            <color
            args={[0,0,0]}
            attach='background'
            />
            <OrbitControls />
        <CubeCamera resolution={256} frames={Infinity}>
            {(texture) => (
            <>
                <Environment map={texture} />
                <Ferrari />
                
            </>
            )}
        </CubeCamera>

        </Suspense>
    </Canvas>
    
    </>
    
  )
}

export default FerrariSpin
