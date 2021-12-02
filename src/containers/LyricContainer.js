import { useState } from 'react'
import SongForm from '../components/SongForm'

const LyricContainer = () => {

    const [lyrics, setLyrics] = useState("")

    return (
        <div>

            <SongForm/>
        </div>
    )
}

export default LyricContainer