import './App.css'
import { Playlist } from './components/AudioPlayer/Playlist/Playlist';
import { VisualOutput } from './components/3D/VisualOutput';

const App = () => {

  return (
    <>
        <VisualOutput />
        <Playlist />
    </>
  )
};

export default App;
