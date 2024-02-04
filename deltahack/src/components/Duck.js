import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("../cute_avocado.glb");
  return <primitive object={scene} {...props} />;
}

function Duck() {
  return (
    <div style={{ width: "50vw", height: "60vh" }}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed= {1.5} maxPolarAngle = {Math.PI/2} minPolarAngle={Math.PI/2}
        ></OrbitControls>
        <ambientLight/>
        <Stage >
          <Model scale={0.012} />
        </Stage>
      </Canvas>
    </div>
  );
}

export default Duck;
