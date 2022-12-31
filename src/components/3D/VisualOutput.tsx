import { useAudioStore } from "../../store/audioStore";
import { GeometryParticles } from "./GeoParticles";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const visualizers = {
    "geometry-particles": GeometryParticles,
}

export const VisualOutput = () => {
    const visualizer = useAudioStore(store => store.visualizer);
    const Visualizer = visualizers[visualizer];

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas>
                <Environment preset="dawn" background />
                <Visualizer />
            </Canvas>
        </div>
    )
}