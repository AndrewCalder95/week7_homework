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
        // onCommentSubmit({
        //     author: artistToSubmit,
        //     title: titleToSubmit,
        // })
        // setArtist("");
        // setTitle("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Artist" value={artist} onChange={handleArtistChange}/>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
            <input type="submit" value="Find"/>
        </form>
    )
}

export default SongForm;