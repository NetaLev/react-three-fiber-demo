import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    /** React-three-fiber Canvas contains THREE.js Renderer, Scene and Camera logic within it,
     *  with default values that make sense */
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
