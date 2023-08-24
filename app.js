const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const db = require('./db'); // Import your MongoDB connection
const unsplashRoutes = require('./routes/unsplash'); // Import your Unsplash API routes
const PORT = 8000;

app.use('/api/unsplash', unsplashRoutes); // Use the Unsplash API routes
app.use(express.urlencoded({ extended : true }));


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
