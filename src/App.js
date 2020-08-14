import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './pages/Login';
import { getTokeFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi()

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokeFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;
        if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe().then(user => console.log(user))
        }
    }, []);
    return (
        <div className="App">{token ? <h1>I am logged In</h1> : <Login />}</div>
    );
}

export default App;
