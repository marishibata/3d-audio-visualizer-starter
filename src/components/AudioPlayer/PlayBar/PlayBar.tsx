import { useEffect, useRef, useState } from "react";

import { useAudioStore } from "../../../store/audioStore";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";

import "./PlayBar.css";

export const PlayBar = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const { 
        songs, 
        currentSongIndex, 
        playing, 
        setCurrentSongIndex, 
        setPlaying, 
        audio,
        setAudio,
    } = useAudioStore();

    const song = typeof currentSongIndex === "number" ? songs[currentSongIndex] : undefined;

    // on every song.uri, play it on mount - if there is no audio element create a new AudioContext
    useEffect(() => {
        const audioEl = audioRef.current;
        if (audioEl && song?.uri) {
            if (!audio) {
                const context = new AudioContext();
                const source = context.createMediaElementSource(audioEl);
                const analyzer = context.createAnalyser();
                analyzer.connect(context.destination);
                analyzer.fftSize = 256;

                const frequencyDataBuffer = new Uint8Array(analyzer.frequencyBinCount);
                source.connect(analyzer);
                setAudio({ context, source, analyzer, frequencyDataBuffer });
            }
            audioEl.play();
        }
    }, [song?.uri]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio && song?.uri) {
            if (!playing) {
                audio.pause();
            } else {
                audio.play();
            }
        }
    }, [playing]);

    const prevTrack = () => {
        if (typeof currentSongIndex === "number") {
            if (currentSongIndex > 0) {
                setCurrentSongIndex(currentSongIndex - 1);
            } else {
                setCurrentSongIndex(songs.length - 1);
            }
        }
    };

    const nextTrack = () => {
        if (typeof currentSongIndex === "number") {
            if (currentSongIndex < songs.length - 1) {
                setCurrentSongIndex(currentSongIndex + 1);
            } else {
                setCurrentSongIndex(0);
            }
        }
    };

    return (
        <div>
            <div className="playbarButtonsContainer">
                <div
                    className="playbarButton"
                    aria-label="previous track"
                    onDoubleClick={() => prevTrack}
                    onClick={() => {
                        const audio = audioRef.current;
                        if (audio) {
                            audio.currentTime = 0;
                        }
                    }}
                >
                    <BiSkipPrevious />
                </div>

                <div
                    className="playbarButton"
                    aria-label="play / pause"
                    onClick={() => setPlaying(!playing)}
                >
                    {playing ? <FaPauseCircle /> : <FaPlayCircle />}
                </div>

                <div
                    className="playbarButton"
                    aria-label="next track"
                    onClick={() => nextTrack()}
                >
                    <BiSkipNext />
                </div>
            </div>
            
            <div>
                {/* <i>{song?.song ?? ""}</i> */}
                {/* {song ? " by " + song?.artist : ""} */}
                {song ? <HiSpeakerWave /> : ""}
            </div>

            <audio
                ref={audioRef}
                src={song?.uri ?? ""}
                onPause={event => setPlaying(!event.currentTarget.paused)}
                onPlay={event => setPlaying(!event.currentTarget.paused)}
            />

        </div>
    )
}