import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tshirtRoutes from './routes/tshirtRoutes.js'; 

const app = express();
app.use(cors());
app.use(express.json());

// Serve static images from the 'public/images' folder
app.use('/images', express.static('public/images'));

mongoose.connect('mongodb://localhost:27017/tshirtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define the schema for the T-shirt data
const tShirt = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  imageUrl: {
      type: String,
      required: true
  },
});

const MyModel = mongoose.model('TshirtData', tShirt);

// Sample query to fetch a t-shirt from the database (works)
await MyModel.findOne();

// Routes
app.use('/api/tshirts', tshirtRoutes);

// Test route to fetch and display a random T-shirt image
app.get("/test", async (req, res2) => {
  try {
    // Fetch a random t-shirt from the database
    let picture = await MyModel.find()
      .limit(-1) // No limit, but skip a random document
      .skip(Math.floor(Math.random() * await MyModel.collection.countDocuments()))
      .findOne();

    if (picture) {
      // Send the image HTML with a valid src
      res2.send(`<IMG src="${picture.imageUrl}" alt="${picture.name}"/>`);
    } else {
      res2.status(404).send('No picture found');
    }
  } catch {
    res2.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000/test'));


// app.get("/test",async (req,res2) =>{
//   let picture = await MyModel.find().limit(-1).skip(Math.floor(Math.random() *await MyModel.collection.countDocuments())).findOne();
//   res2.send("<IMG src=\""+picture.imageUrl+"\" alt=\""+picture.name+"\"/>")}
// );

