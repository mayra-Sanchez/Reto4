import { OrbitControls, useHelper } from '@react-three/drei'
import { useRef } from 'react';
import { DirectionalLightHelper, HemisphereLightHelper, LightShadow, PointLightHelper, RectAreaLight, SpotLightHelper } from 'three';
import { Perf } from 'r3f-perf'
import Circulo from './Sphere'
import Cubo from './Cube'
import Cono from './Cone'
import Cilindro from './Cilindre'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 2)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(rectAreaLightRef, RectAreaLight, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        
        
        {/*<directionalLight ref={directionalLightRef} intensity={ 1.5 } castShadow = {true} shadow-mapSize={ [ 2024, 1024 ] } position={[-3, 2, -2]}  />*/}
        {/*<hemisphereLight ref={hemisphereLightRef} intensity={ 1.5 } castShadow = {true} position={[-2, 5, -2]}/>*/}
        {/*<pointLight ref={pointLightRef} intensity={ 1.5 } castShadow = {true} position={[-8, 2, -2]}  />*/}
        {/*<rectAreaLight ref={rectAreaLightRef} intensity={ 1.5 } castShadow = {true} position={[-3, 2, -2]}/>*/}
        <spotLight ref={spotLightRef} intensity={ 1.5 } castShadow = {true} position={[6, 6, 8]}/>
        <ambientLight intensity={0.5} />
        
        <Circulo />
        <Cubo />
        <Cono />
        <Cilindro/>
        <mesh receiveShadow={true} position-y={ -1.5 } rotation-x={ - Math.PI * 0.5 } scale={ 20 } position-x={ 6 }>
            <planeGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    </>
}