import cors from 'cors';
import { handler as expressHandler } from '../../src/server.js'; // Import Express app

// CORS middleware
const corsMiddleware = cors({
  origin: 'https://zenith-notes-app.vercel.app',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
});

// Serverless function
export default async (req, res) => {
  corsMiddleware(req, res, async () => {
    if (req.method === 'OPTIONS') {
      // Handle OPTIONS explicitly
      res.status(200).end();
    } else {
      // Delegate POST to Express app
      await expressHandler(req, res);
    }
  });
};