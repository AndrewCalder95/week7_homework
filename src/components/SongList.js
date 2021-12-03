import Song from "./Song"

const SongList = ({ lyrics }) => {
        
    const lyricNodes = lyrics.map(lyric => {
        return <Song artist={ lyric.artist } title={ lyric.title } key= { lyric.id }></Song>
    })
    return (
        <>
            {lyricNodes}
        </>
    )
}

export default SongList;