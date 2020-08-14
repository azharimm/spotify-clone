import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './context/DataLayer'
import Login from './pages/Login';
import Player from './pages/Player'
import { getTokeFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi()

const App = () => {
    const [token, setToken] = useState(null);
    const [{user}, dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokeFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;
        if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user 
                });
            })
        }
    }, []);

    console.log(user);
    return (
        <div className="App">{token ? <Player/> : <Login />}</div>
    );
}

export default App;
