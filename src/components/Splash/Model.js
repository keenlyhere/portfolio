import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export function Model(props) {
  const { nodes, materials } = useGLTF("/cowmodel.glb");
  const group = useRef()
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_1"].geometry}
        material={nodes["215540_23_03_09_00_41_01_1"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
        color={ "white" }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_2"].geometry}
        material={nodes["215540_23_03_09_00_41_01_2"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_3"].geometry}
        material={nodes["215540_23_03_09_00_41_01_3"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_4"].geometry}
        material={nodes["215540_23_03_09_00_41_01_4"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_5"].geometry}
        material={nodes["215540_23_03_09_00_41_01_5"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_6"].geometry}
        material={nodes["215540_23_03_09_00_41_01_6"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_0"].geometry}
        material={nodes["215540_23_03_09_00_41_01_0"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["215540_23_03_09_00_41_01_7"].geometry}
        material={nodes["215540_23_03_09_00_41_01_7"].material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 0.5 }
        position={ [ 0, -5, 0 ] }
      />
    </group>
  );
}

useGLTF.preload("/cowmodel.glb");
