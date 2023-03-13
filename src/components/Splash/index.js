import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, Suspense, useState, useLayoutEffect } from "react";
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
// import { ScrollControls, useScroll } from "@react-three/drei";
import { ScrollControls, useScroll } from "@react-three/drei";
import SplashText from "./Text";

import gsap from "gsap";
import Projects from "../Projects";
import { Overlay } from "../Sections";

extend({ OrbitControls: OrbitControls })

export const FLOOR_HEIGHT = 4;
export const NUM_FLOORS = 4;

export default function Splash() {
    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
  });

    console.log("scroll:", scroll);
//     console.log("tl:", tl);

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // VERTICAL ANIMATION
        tl.current.to(
        groupRef.current.position,
        {
            duration: 2,
            y: -FLOOR_HEIGHT * (NUM_FLOORS - 1),
        },
        0
        );

    }, [])

    const eventHandler = () => {
        console.log("event occurred");
    }

    return (
        <>
        <orbitControls args={ [ camera, gl.domElement ]} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} />

        <directionalLight position={ [ 1, 5, 3 ] } intensity={ 0.9 } />

        <ambientLight intensity={ 0.3 } />

        {/* <Model scale={ 0.5 } rotation-y={ 4.7 } /> */}
            <group ref={ groupRef }>
                <Overlay />
                <Cow scale={ 0.5 } rotation-y={ 4.7 } />
                <Moon scale={ 0.5 } rotation-y={ 4.7 } />
                <Cloud />
                <Star />
                <BigStar />
                <SplashText />
            </group>
            {/* <group>
                <Projects />
            </group> */}

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
