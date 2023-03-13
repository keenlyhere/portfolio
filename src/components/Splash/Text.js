import { Center, Text3D, OrbitControls, Scroll, Text, Billboard } from "@react-three/drei";

export default function SplashText() {
    return (
        <>
            <Billboard>
                <Text3D
                    scale={ 0.55 }
                    position-x={ 1.5 }
                    font="./fonts/Keenlys_Handwriting_Regular.json"
                    height={ 0.1 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                    // rotation-y={ -0.1 }
                >
                    Keenly
                    <meshStandardMaterial color="mediumpurple" />
                </Text3D>
                <Text color="black" anchorX={ -8 } anchorY={ 1 } scale={ 0.15 }>
                    Scroll down to enter my dreamworld!
                </Text>
            </Billboard>
        </>
    )
}
