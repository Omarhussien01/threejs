/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import Camera from "./Camera";

const CenteredCanvas = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <Camera>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </Camera>
      </Canvas>
    </div>
  );
};

export default CenteredCanvas;
