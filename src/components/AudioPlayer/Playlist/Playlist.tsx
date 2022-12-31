import { useEffect, useState } from "react";
import { useAudioStore } from "../../../store/audioStore";
import { PlayBar } from "../PlayBar/PlayBar";
import './Playlist.css'

export const Playlist = () => {
    // TODO - audio sidebar panel menu / close button
    const [ hideSidebar, setHideSidebar ] = useState(false);

    const { songs, setCurrentSongIndex, currentSongIndex } = useAudioStore();


    useEffect(() => {
        if (typeof currentSongIndex === "number") {
            setHideSidebar(true);
        }
    }, [currentSongIndex]);

    return ( 
        <div className="playlistContainer">
            <div className="sidebarTitlesContainer">
                <h1>3D Audio Visualizer :: React Three Fiber x TypeScript Starter</h1>
                <div>(feat. music produced c. 2005)</div>
                <h2>Click on song title to play audio</h2>
            </div>
                {songs.map(({ song, artist }, index ) => (
                    <div className="playlistItem" key={artist + song} onClick={() => setCurrentSongIndex(index)}>
                        <div>
                            <i>{song}</i> - {artist}
                        </div>
                    </div>
                ))}
                 <PlayBar />
        </div>
    )
};