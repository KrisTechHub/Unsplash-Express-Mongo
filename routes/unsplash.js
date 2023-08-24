const express = require('express');
const router = express.Router();
const axios = require('axios');
const Photo = require('../models/photo'); // Import the Photo model


const UNSPLASH_ACCESS_KEY = '5PwUc2Y8dcQeOBwAfNl5QfpxGkaziTUvSPB5hqJpUXs';

router.get('/random-collection-photo', async (req, res) => {
    try {
    const response = await axios.get('https://api.unsplash.com/collections/10489597/photos', {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    const photos = response.data;
    
    // Select a random photo
    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex].urls.small; // Get the regular image URL

    res.render('sampleimages', { randomPhoto }); // Render the EJS template with data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
