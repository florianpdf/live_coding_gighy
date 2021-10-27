import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';

import GifList from './components/GifList';
import SelectedGif from './components/SelectedGif';

import { apiKey } from "./secrets"

function App() {

    const [gifs, setGifs] = useState()
    const [selectedGif, setSelectedGif] = useState()

    useEffect(() => {
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=$dog&limit=5`)
             .then(response => setGifs(response.data.data))
             .catch(error => console.log(error))
    }, [])

    return (
        <div className="app">
            <div className="selectedGif">
                <SelectedGif data={selectedGif}/>
            </div>
            <div className="gifList">
                <GifList datas={gifs} setSelectedGif={setSelectedGif} />
            </div>
        </div>
    );
}

export default App;
