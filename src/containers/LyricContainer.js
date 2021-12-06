import { useState, useEffect } from 'react'
import SongForm from '../components/SongForm'
import SongList from '../components/SongList'
import Lyrics from '../components/Lyrics'


const LyricContainer = () => {

    const [lyrics, setLyrics] = useState([])
    const [song, setSong] = useState("")


    const addSong = (submittedSong) => {
        const updateSong = [submittedSong];
        setLyrics(updateSong)
        const artist = submittedSong.artist
        const title = submittedSong.title
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => res.json())
        .then(song => setSong(song.lyrics))
        
    }

    return (
        <div>
            <h1 id="title"> Lyric Finder </h1>
            <h4> Enter the name and artist of any song and get the lyrics! </h4>
            <SongForm onSongSubmit={(song) => addSong(song)} />
            <div id="lyrics">
                <SongList lyrics={lyrics}/>
                <Lyrics song={song} />
            </div>
        </div>
    )
}

export default LyricContainer;