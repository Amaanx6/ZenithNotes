// api/auth/login.js
import cors from 'cors';
import { handler as expressHandler } from '../../src/server.js'; // Adjust path to your Express app

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
      res.status(200).end();
    } else if (req.method === 'POST') {
      await expressHandler(req, res);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
};