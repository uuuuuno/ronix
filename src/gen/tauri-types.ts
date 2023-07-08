// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "config.get", input: never, result: Config } | 
        { key: "config.getDefaultMusicFolder", input: never, result: string } | 
        { key: "config.pickFolder", input: never, result: string | null } | 
        { key: "library.get", input: never, result: Library } | 
        { key: "player.getVolume", input: never, result: number },
    mutations: 
        { key: "config.set", input: Config, result: null } | 
        { key: "player.nextSong", input: never, result: null } | 
        { key: "player.playSong", input: PlaySongInput, result: null } | 
        { key: "player.previousSong", input: never, result: null } | 
        { key: "player.seek", input: number, result: null } | 
        { key: "player.setVolume", input: number, result: number } | 
        { key: "player.togglePause", input: never, result: null } | 
        { key: "player.toggleRepeatMode", input: never, result: RepeatMode } | 
        { key: "player.toggleShuffle", input: never, result: boolean },
    subscriptions: 
        { key: "player.currentSong", input: never, result: CurrentSongData }
};

export type RepeatMode = "None" | "One" | "All"

export type PlaySongInput = { song_id: string; scope: PlayerScope }

export type Artist = { name: string }

export type Config = { music_folders: string[] }

export type Album = { name: string; cover_art: string | null; artist: string }

export type CurrentSongData = { current_song: string | null; song_started_at: number; paused_at: number | null; volume: number }

export type PlayerScope = "Library" | { Album: string } | { Artist: string }

export type Library = { artists: { [key: string]: Artist }; albums: { [key: string]: Album }; songs: { [key: string]: Song } }

export type Song = { title: string; path: string; duration: number; album: string }
