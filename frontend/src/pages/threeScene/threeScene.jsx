import React from 'react';
import Box from '../../components/3Dcomponents/Box';
import {Sky} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const ThreeScene = () => {
    return (
        <Canvas style={{height:'100vh'}}>
            <Sky sunPosition={[100,100,20]}/>
            <ambientLight intensity={0.6 }/>
            <directionalLight
                castShadow
                intensity={1.5}
                shadow-mapSize={256}
                position={[100, 100, 0]}
            />
            <Box/>
        </Canvas>
    );
};

export default ThreeScene;