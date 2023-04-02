// Esto es un cono de arena

import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber"

export default function Cono() {
    const conoRef = useRef()
    const PATH = "/static/textures/arena/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })

    useFrame((state, delta)=>{
        conoRef.current.rotation.y += 0.1 * delta  ;
    })
 
    return (
        <mesh castShadow={true} ref={conoRef} scale={2} position-x={8} position-y={1.5}>
                <coneGeometry args={[1.5, 1, 3]} />
                <meshStandardMaterial {...props} />
            </mesh>
        
    )
}