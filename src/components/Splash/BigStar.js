// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { useLoader } from "@react-three/fiber";
// import { LayerMaterial, Depth } from "lamina";
// import * as THREE from 'three'
// export default function Star() {
//     const materials = useLoader(MTLLoader, "/star.mtl");
//     const obj = useLoader(OBJLoader, '/star.obj',
//     // (loader) => {
//     //     // materials.preload();
//     //     loader.setMaterials(materials);
//     // }
//     )

//     const base = '#ff4eb8'
//     const colorA = '#00ffff'
//     const colorB = '#ff8f00'

//     return (
//             <primitive object={obj} scale={ 0.2 } position-x={ 1 } position-y={ 1.2 } rotation={ [ 90, 90, -0.1 ] }>
//                 <meshStandardMaterial color="mediumpurple" />
//             </primitive>

//         )
// }

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function BigStar(props) {
  const { nodes, materials } = useGLTF("/star.glb");
  const [ starSize, setStarSize ] = useState(false);
  const scale = starSize ? 0.2 : 0.5;
//   const materials = useLoader(MTLLoader, "/star.mtl");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star.geometry}
        rotation={[0.39, 1.5, 1.33]}
        position={ [ 2, 3, -2] }
        scale={ scale }
        onPointerEnter={() => setStarSize(!starSize)}
      >
        <meshStandardMaterial color="#fbe7a8" />
    </mesh>
    </group>
  );
}

useGLTF.preload("/star.glb");
