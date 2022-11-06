import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "./App.css";

function App() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    const { rotation } = meshRef.current;
    rotation.x += delta / 2;
    rotation.y += delta / 2;
  });

  return (
    <mesh ref={meshRef} rotation={[1, 1, 1]}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default App;
