import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [
  'http://localhost:5173',
  'https://aicee-main.vercel.app',
  'https://aicee-main.onrender.com',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('❌ CORS blocked:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// ✅ Blog Routes
app.use('/api/blogs', blogRoutes);

// ✅ Root
app.get('/', (req, res) => {
  res.send('✅ AICEE Backend is running!');
});

// ✅ 404 fallback
app.use((req, res) => {
  console.warn(`❌ Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// ✅ Connect DB and Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
