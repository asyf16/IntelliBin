import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("../dinosaur.glb");
  return <primitive object={scene} {...props} />;
}

function Cat() {
  return (
    <div style={{ width: "50vw", height: "60vh" }}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed= {1.5} maxPolarAngle = {Math.PI/3} minPolarAngle={Math.PI/3}
        ></OrbitControls>

        <Stage>
          <Model scale={0.012} />
        </Stage>
      </Canvas>
    </div>
  );
}

export default Cat;
