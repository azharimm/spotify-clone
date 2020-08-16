import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './context/DataLayer';
import Login from './pages/Login';
import Player from './pages/Player';
import { getTokeFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi();

const App = () => {
    const [{ user, token }, dispatch] = useDataLayerValue();

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
            spotify.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlists: playlists
                });
            });

            spotify.getPlaylist('37i9dQZEVXcMfBuBfxGwx1').then(discover_weekly => {
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: discover_weekly
                })
            })
        }
    }, []);

    return (
        <div className="App">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
};

export default App;
