import create from "zustand";

import { Song, SongList } from "../types/song";

// figure out why the props are ordered this way - is it logical?
export type AudioStore = {
    songs: Array<Song>;
    currentSongIndex?: number;
    playing: boolean;
    fetchSongs: () => Promise<void>;
    setCurrentSongIndex: (index: number) => void;
    setPlaying: (playing: boolean) => void;
    visualizer: "geometry-particles";
    setVisualizer: (visualizer: AudioStore["visualizer"]) => void;
    audio?: {
        context: AudioContext;
        source: MediaElementAudioSourceNode;
        analyzer: AnalyserNode;
        frequencyDataBuffer: Uint8Array;
    };
    setAudio: (audio: AudioStore["audio"]) => void;
};

export const useAudioStore = create<AudioStore>((set, get) => ({
    songs: [],
    currentSongIndex: undefined,
    playing: false,
    visualizer: "geometry-particles",
    setVisualizer: (visualizer: AudioStore["visualizer"]) => {
        set({ visualizer });
    },
    fetchSongs: async () => {
        const response = await fetch("/audioData.json");
        if (!response.ok) {
            throw new Error("Failed to fetch audio data");
        }

        const { songs }: SongList = await response.json();
        set({ songs });
    },
    setCurrentSongIndex: async currentSongIndex => {
        const song = get().songs[currentSongIndex];
        if (!song) {
            throw new Error(`Song for index ${currentSongIndex} does not exist`);
        }

        set({ currentSongIndex, playing: true});
    },
    setAudio: (audio: AudioStore["audio"]) => {
        set({ audio });
    },
    setPlaying: playing => {
        const { currentSongIndex } = get();
        if (playing && typeof currentSongIndex !== "number") {
            throw new Error("Can't start playing because there is no active song");
        }

        set({ playing });
    },
}));

// initialise data
useAudioStore.getState().fetchSongs();