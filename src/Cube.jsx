// Esto es un hielo
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber"

export default function Cubo() {
    const boxRef = useRef()
    const PATH = "/static/textures/water/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        mask: PATH + 'mask.jpg',
    })

    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 0.1 * delta  ;
    })
 
    return (
        <mesh castShadow={true} ref={boxRef} scale={2} position-x={3} position-z={-5}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial {...props} color={"Cyan"}/>
            </mesh>
        
    )
}