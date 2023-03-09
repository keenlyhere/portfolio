import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import Cow from "./components/Splash/Cow";
import { Model } from "./components/Splash/Model";

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
                  <Canvas>
                    <Suspense fallback={null}>
                      {/* <Model /> */}
                      {/* <Cow /> */}
                      <Splash />
                    </Suspense>
                  </Canvas>
                </div>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
