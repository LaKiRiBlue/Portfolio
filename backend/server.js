import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));

mongoose.connect('mongodb://localhost:27017/tshirtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

import tshirtRoutes from './routes/tshirtRoutes';
app.use('/api/tshirts', tshirtRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
