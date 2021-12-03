import { useState } from 'react';

const SongForm = ({ onSongSubmit }) => {
    
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");

    const handleArtistChange = (e) => {
        setArtist(e.target.value)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const artistToSubmit = artist.trim()
        const titleToSubmit = title.trim()
        if (!artistToSubmit || !titleToSubmit) {
            return;
        }
        onSongSubmit({
            artist: artistToSubmit,
            title: titleToSubmit,
        })
        setArtist("");
        setTitle("");
    };

    return (
        <form id="song_form" onSubmit={handleFormSubmit}>
            <div id="form_inputs">
            <div>
                <value> Artist: </value>
                    <input type="text" placeholder="Artist" value={artist} onChange={handleArtistChange} />
            </div>
            <div>
                <value> Song Title: </value>
                    <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            </div>
            <hr></hr>
            <input id = "submit" type="submit" value="Find"/>
            </div>
        </form>
    )
}

export default SongForm;