import { KeyboardControls, ScrollControls, useScroll, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Splash from "./components/Splash";
import Cow from "./components/Splash/Cow";
import { Model } from "./components/Splash/Model";
import { Physics } from "@react-three/rapier"
import User from "./components/User";
import { Overlay } from "./components/Sections";

function App() {
  const title = document.title;
  window.addEventListener("blur", () => {
    document.title = "I miss you... :c";
  });

  window.addEventListener("focus", () => {
    document.title = title;
  })

  return (
    <div className="App-container">
          <Switch>
              <Route exact path="/">
                <div className="Splash-container">
                  {/* <KeyboardControls map={ [
                    { name: 'forward', keys: [ 'ArrowUp', 'KeyW', 'w', 'W' ] },
                    { name: 'backward', keys: [ 'ArrowDown', 'KeyS', 's', 'S' ] },
                    { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA', 'a', 'A' ] },
                    { name: 'rightward', keys: [ 'ArrowRight', 'KeyD', 'd', 'D' ] },
                    { name: "jump", keys: ["Space"] },
                  ] }> */}

                    <Canvas>
                      <Suspense fallback={null}>
                        {/* <Model /> */}
                        {/* <Cow /> */}
                        <ScrollControls pages={ 4 }>

                            <Splash />
                        </ScrollControls>
                      </Suspense>
                    </Canvas>
                    <Loader />
                  {/* </KeyboardControls> */}
                </div>
                {/* <Skills /> */}
                {/* <Projects /> */}
              </Route>
          </Switch>
      </div>
  );
}

export default App;
