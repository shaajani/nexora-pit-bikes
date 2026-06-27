const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const Order = require('./models/Order');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Fallback Logger Helper (saves to local JSON files if MongoDB is not connected)
let isDbConnected = false;
const LOCAL_ORDERS_FILE = path.join(__dirname, 'orders.json');
const LOCAL_CONTACTS_FILE = path.join(__dirname, 'contacts.json');

const saveLocally = (filePath, data) => {
  try {
    let existing = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      existing = JSON.parse(fileData || '[]');
    }
    existing.push({ ...data, createdAt: new Date() });
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error logging data locally:', err);
    return false;
  }
};

// MongoDB Connection Setup
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('MongoDB Atlas connected successfully.');
      isDbConnected = true;
    })
    .catch((err) => {
      console.warn('WARNING: MongoDB Atlas connection failed. Falling back to local logging.', err.message);
    });
} else {
  console.warn('WARNING: MONGO_URI not found in environment. Running in LOCAL-ONLY fallback mode.');
}

// API Routes

// 1. Submit Order
app.post('/api/orders', async (req, res) => {
  const { customerName, phone, address, city, state, pinCode, productName, quantity, additionalMessage } = req.body;

  if (!customerName || !phone || !address || !city || !state || !pinCode || !productName) {
    return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
  }

  const orderData = { customerName, phone, address, city, state, pinCode, productName, quantity: quantity || 1, additionalMessage };

  if (isDbConnected) {
    try {
      const newOrder = new Order(orderData);
      await newOrder.save();
      console.log(`[DB] Order placed for ${productName} by ${customerName}`);
      return res.status(201).json({ success: true, db: true, message: 'Order placed and saved to MongoDB!' });
    } catch (err) {
      console.error('Error saving order to MongoDB:', err);
      // fallback to local file on error
    }
  }

  // Local file fallback
  const written = saveLocally(LOCAL_ORDERS_FILE, orderData);
  console.log(`[LOCAL FALLBACK] Order placed for ${productName} by ${customerName}. Logged to local JSON file.`);
  return res.status(201).json({
    success: true,
    db: false,
    message: 'Order received! (Saved locally because database was unavailable)',
    note: 'Database fallback triggered.'
  });
});

// 2. Submit Contact Form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const contactData = { name, email, message };

  if (isDbConnected) {
    try {
      const newContact = new Contact(contactData);
      await newContact.save();
      console.log(`[DB] Contact inquiry received from ${name} (${email})`);
      return res.status(201).json({ success: true, db: true, message: 'Message sent and saved to MongoDB!' });
    } catch (err) {
      console.error('Error saving contact submission to MongoDB:', err);
      // fallback to local file on error
    }
  }

  // Local file fallback
  saveLocally(LOCAL_CONTACTS_FILE, contactData);
  console.log(`[LOCAL FALLBACK] Contact inquiry received from ${name} (${email}). Logged to local JSON file.`);
  return res.status(201).json({
    success: true,
    db: false,
    message: 'Message sent! (Saved locally because database was unavailable)'
  });
});

// 3. Get Bikes List (in case the frontend queries it dynamically)
app.get('/api/bikes', (req, res) => {
  try {
    const bikesPath = path.join(__dirname, '..', 'frontend', 'js', 'bikes-data.js');
    if (fs.existsSync(bikesPath)) {
      // Return raw content or read the JS file to extract the array (simplest is reading a bikes.json if present)
      const bikesJsonPath = path.join(__dirname, '..', 'bikes.json');
      if (fs.existsSync(bikesJsonPath)) {
        const bikesData = JSON.parse(fs.readFileSync(bikesJsonPath, 'utf8'));
        return res.json(bikesData);
      }
    }
    return res.status(404).json({ success: false, message: 'Bikes data file not found' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Serve frontend static assets
app.use(express.static(path.join(__dirname, '../frontend')));

// Fallback wildcard routing for HTML5 history API (SPA-friendly)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Listen
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`  AR OFF-ROAD RIDES Server running on port ${PORT}`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
