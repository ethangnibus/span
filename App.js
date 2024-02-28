import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber";
import useControls from "r3f-native-orbitcontrols"
import { Vector3 } from "three";



function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh && mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => {
        setActive(!active)
        console.log("yooyoyoyoy")
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  canvas: {
    flex: 1,
  }
});

export default function App() {
  const [OrbitControls, events] = useControls()

  return (
    <View style={styles.container} {...events}>
      <Canvas style={styles.canvas}>
        <OrbitControls
          enabled={true}
          // target={[0, 0, 0]}
          // minPolarAngle={2.0}
          // maxPolarAngle={2.0}
          // minAzimuthAngle={10.0}
          // maxAzimuthAngle={10.0}
          // dampingFactor={0.1}
          enableZoom={true}
          // zoomSpeed={100}
          minZoom={0.0}
          maxZoom={1000.0}
          enableRotate={true}
          rotateSpeed={1.0}
          // enablePan={false}
          // panSpeed={1.0}

        />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </View>
  );
}