// Esta es una barra de metal
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber"

export default function Cilindro() {
    
    const cilindreRef = useRef()
    const PATH = "/static/textures/metal/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metal: PATH + 'metallic.jpg',
        opaco: PATH + 'opacity.jpg',
    })
    
    useFrame((state, delta)=>{
        cilindreRef.current.rotation.y += 0.1 * delta  ;
    })
    return (
        <mesh castShadow={true} ref={cilindreRef} position={[0,5,6]} scale={0.1} position-y = {0.5}>
                <cylinderGeometry args={[10, 10, 30]}/>
                <meshStandardMaterial {...props}/>
        </mesh> 
    )
}