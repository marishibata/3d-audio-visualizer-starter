import { useAudioStore, AudioStore } from "../../store/audioStore";

export const SelectVisualizer = () => {
    const  { visualizer, setVisualizer } = useAudioStore(({ visualizer, setVisualizer }) => ({ visualizer, setVisualizer}));

    return (
        <div>
            <select value={visualizer} onChange={e => setVisualizer(e.target.value as AudioStore["visualizer"])}>
                <option value="geometry-particles">3D Geometry Particles</option>
            </select>
        </div>
    )
};