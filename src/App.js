import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './context/DataLayer'
import Login from './pages/Login';
import Player from './pages/Player'
import { getTokeFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi()

const App = () => {
    const [{user, token}, dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokeFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;
        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            });
			spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user 
                });
            })
        }
    }, []);

    return (
        <div className="App">{token ? <Player spotify={spotify}/> : <Login />}</div>
    );
}

export default App;
