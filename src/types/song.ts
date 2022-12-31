export type Song = {
    uri: string;
    artist: string;
    song: string;
};

export type SongList = {
    songs: Array<Song>;
}