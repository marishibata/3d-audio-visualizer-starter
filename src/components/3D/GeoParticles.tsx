import { FC, useRef } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { MeshProps, ThreeElements, useFrame } from "@react-three/fiber";

import { useAudioStore } from "../../store/audioStore"

export const GeometryParticles = () => {
  const audio = useAudioStore(store => store.audio);
  useFrame(() => {
    if (audio) {
      audio.analyzer.getByteFrequencyData(audio.frequencyDataBuffer);
    }
  });

  return (
    <>
      {/*@ts-ignore*/}
      {/* <PerspectiveCamera /> */}
      <PerspectiveCamera makeDefault position={[1000, 1000, 1000]} zoom={100} />
      <OrbitControls minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 10}  />
      <ambientLight intensity={4} />
      {Array.from({ length: 500 }).map((_, index) => (
        <GeometryPoint
          key={index}
          index={index}
          position={[
            Math.random() * 70,
            Math.random() * 50,
            Math.random() * 20,
          ]}
        />
      ))}
    </>
  );
};

const GeometryPoint: FC<MeshProps & { index: number }> = ({ index, ...props }) => {
  const audio = useAudioStore(store => store.audio);
  const meshRef = useRef<ThreeElements["mesh"]>(null);
  const materialRef = useRef<ThreeElements>(null);
  const initialScale = 0.025;
  useFrame(() => {
    const ball = meshRef.current;
    const material = materialRef.current;
    if (audio && ball && material) {
      const repeatNote = Math.floor(index / 127);
      const intensity =
        audio.frequencyDataBuffer[
          index > 127 ? Math.abs(127 * repeatNote - index) : index
        ];
      ball.scale.x = Math.sin(Math.PI *  initialScale + 0.0025 * intensity);
      ball.scale.y = Math.sin(Math.PI *  initialScale + 0.0025 * intensity);
      ball.scale.z = Math.sin(Math.PI * initialScale + 0.0025 * intensity);
      ball.position.z = Math.PI * initialScale + 0.05  * intensity;
      ball.rotation.x = Math.PI * initialScale * intensity;
      ball.rotation.y = Math.PI * initialScale * intensity;
      ball.rotation.z = Math.PI * initialScale * intensity;
      material.color.g = Math.max(0, 1 - intensity / 150);
      // material.color.b = Math.max(0.667, 1.667 - intensity / 80);
    }
  });

  return (
    <mesh ref={meshRef} scale={initialScale} {...props} castShadow receiveShadow>
      <icosahedronGeometry />
      <meshPhysicalMaterial ref={materialRef} roughness={0} metalness={0} thickness={3.12} ior={1.74} transmission={1.0} />
    </mesh>
  );
};
