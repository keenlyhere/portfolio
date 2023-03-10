import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

export default function Cloud() {
    const materials = useLoader(MTLLoader, "/cloud.mtl");
    const obj = useLoader(OBJLoader, '/cloud.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    })
    return <primitive object={obj} scale={ 0.38 } position={ [ -1.8, -2.55, 3] } rotation-y={ 1.8 } />
}
