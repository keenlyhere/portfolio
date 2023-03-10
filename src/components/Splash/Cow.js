import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

export default function Cow() {
    const materials = useLoader(MTLLoader, "/cowmaterial.mtl");
    const obj = useLoader(OBJLoader, '/cow.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    })
    return <primitive object={obj} scale={ 0.25 } position-x={ -1.8 } position-y={ -2.1 } rotation-y={ 5 } />
}
