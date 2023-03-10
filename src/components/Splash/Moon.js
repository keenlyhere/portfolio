import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

export default function Moon() {
    const materials = useLoader(MTLLoader, "/moon.mtl");
    const obj = useLoader(OBJLoader, '/moon.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    })
    return <primitive object={obj} scale={ 0.25 } position={ [ 8.2, 2.8, -5 ] } rotation-y={ 4.51 } rotation-z={ 0 } />
}
