// src/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js'; // Adjust path
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'https://zenith-notes-app.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Debug route to confirm server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Mount auth routes
app.use('/api/auth', authRouter);

// Catch-all for debugging 404s
app.use((req, res) => {
  console.log(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Not Found' });
});

export const handler = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}