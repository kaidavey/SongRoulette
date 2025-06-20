/*
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/track-info', async (req, res) => {
    const { trackId } = req.query;
    if (!trackId) return res.status(400).json({ error: 'Missing trackId' });

    try {
        const token = await getAccessToken();
        const trackData = await getTrackInfo(trackId, token);
        res.json({
            id: trackData.id,
            name: trackData.name,
            artists: trackData.artists.map(a => a.name),
            image: trackData.album.images[0]?.url
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch track info' });
    }
});

async function getAccessToken() {
    const clientId = 'insert';
    const clientSecret = 'insert';
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const res = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    );

    return res.data.access_token;
}

async function getTrackInfo(trackId, token) {
    const res = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
}
 */