const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample headlines for random generation
const sampleHeadlines = [
  "Why {name} is {location}'s Hidden Gem in 2025",
  "{name} - {location}'s Top-Rated Business You Can't Miss",
  "Discover Why {name} is Taking {location} by Storm",
  "{name}: The Ultimate {location} Experience Awaits",
  "Local Favorite: {name} Dominates {location}'s Market",
  "{name} - Where {location} Meets Excellence",
  "Breaking: {name} Becomes {location}'s Must-Visit Destination",
  "{name} Sets New Standards in {location}",
  "Why Everyone in {location} is Talking About {name}",
  "{name} - {location}'s Best Kept Secret Revealed"
];

// Helper function to generate random rating
const generateRating = () => {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
};

// Helper function to generate random review count
const generateReviews = () => {
  return Math.floor(Math.random() * 500) + 50;
};

// Helper function to generate headline
const generateHeadline = (name, location) => {
  const randomIndex = Math.floor(Math.random() * sampleHeadlines.length);
  return sampleHeadlines[randomIndex]
    .replace('{name}', name)
    .replace('{location}', location);
};

// POST /business-data
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    if (!name || !location) {
      return res.status(400).json({ error: 'Name and location are required' });
    }

    const businessData = {
      rating: generateRating(),
      reviews: generateReviews(),
      headline: generateHeadline(name, location)
    };

    res.json(businessData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    if (!name || !location) {
      return res.status(400).json({ error: 'Name and location are required' });
    }

    const newHeadline = generateHeadline(name, location);
    
    res.json({ headline: newHeadline });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});