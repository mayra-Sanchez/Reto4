// Esta es una roca
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber"

export default function Circulo() {
    
    const sphereRef = useRef()
    const PATH = "/static/textures/rook/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })
    
    useFrame((state, delta)=>{
        sphereRef.current.rotation.x += 0.1 * delta  ;
    })
    return (
        <mesh castShadow={true} ref={sphereRef} position-z = {-3} scale={1}>
                <sphereGeometry args={[1, 32, 64]}/>
                <meshStandardMaterial {...props}/>
        </mesh> 
    )
}