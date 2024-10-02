import React, {useState, useRef} from 'react';
import {useFrame} from "@react-three/fiber";



const Box = () => {
    const ref =useRef();
    const [onHover,setOnHover] = useState(false);
    useFrame(()=>{
        ref.current.rotation.x += 0.1;
        ref.current.rotation.y +=0.1;
    })
    return (
        <mesh ref={ref}
              scale={onHover?2:1}
              onPointerEnter={()=>setOnHover(true)}
              onPointerLeave={() =>setOnHover(false)}
              receiveShadow castShadow>
            <boxGeometry/>
            <meshBasicMaterial  color={onHover?"red":"blue"}/>
        </mesh>
    );
};

export default Box;