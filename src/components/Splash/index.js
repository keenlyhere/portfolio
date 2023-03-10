import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Model } from "./Model";
import "./Splash.css";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import Cow from "./Cow";
import Moon from "./Moon";
import Cloud from "./Cloud";
import { Star } from "./Star";
import { BigStar } from "./BigStar";
import { ScrollControls } from "@react-three/drei";

extend({ OrbitControls: OrbitControls })

export default function Splash() {
    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();

    // const materials = useLoader(MTLLoader, "cow.")
    // const obj = useLoader(OBJLoader, "../../assets/cow.obj");

    // rotate cube with react fiber hook useFrame
    // useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta;
        // cubeRef.current.rotation.x += delta;
        // groupRef.current.rotation.y += delta;
    // })

    let scaleX = 1.5;
    let scaleY = 1.5;
    let scaleZ = 1.5;
    let positionX = 2;
    let positionY = 0;
    let positionZ = 0;
    let rotationX = 2;
    let rotationY = Math.PI * 0.25;
    let rotationZ = 0;

    return (
        <>
        <orbitControls args={ [ camera, gl.domElement ]} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} />

        <directionalLight position={ [ 1, 5, 3 ] } intensity={ 0.9 } />

        <ambientLight intensity={ 0.3 } />
        {/* <ScrollControls pages={ 2} damping={0.25}> */}

        {/* <Model scale={ 0.5 } rotation-y={ 4.7 } /> */}
        <Cow scale={ 0.5 } rotation-y={ 4.7 } />
        <Moon scale={ 0.5 } rotation-y={ 4.7 } />
        <Cloud />
        <Star />
        <BigStar />
        {/* </ScrollControls> */}

        {/* <group ref={ groupRef }>
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh ref={ cubeRef } scale={ [ scaleX, scaleY, scaleZ ]} position={ [ positionX, positionY, positionZ ] }>
                <boxGeometry scale={ 1.5 } />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </group>

            <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5} scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh> */}
        </>
    )
}
