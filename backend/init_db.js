import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Tshirt from './models/Tshirt.js';

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

const tShirt = new mongoose.Schema({
  name: {
      type: String,
      require: true
  },
  description: {
      type: String,
      require: true
  },
  imageUrl: {
      type: String,
      require: true
  },
})

const MyModel = mongoose.model('TshirtData', tShirt);
// Works
await MyModel.findOne();

console.log('Hello World');

let tshirt1 = new Tshirt({
  name: "IMG20241017125143.jpg",
  imageUrl: "/images/IMG20241017125143.jpg"
});

tshirt1.save();

tshirt1 = new Tshirt({
  name: "IMG20241017125305.jpg",
  imageUrl: "/images/IMG20241017125305.jpg"
});

tshirt1.save();