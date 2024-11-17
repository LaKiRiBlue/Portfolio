import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tshirtRoutes from './routes/tshirtRoutes.js'; 

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
  imageUrl: {
      type: String,
      require: true
  },
})

const MyModel = mongoose.model('TshirtData', tShirt);
// Works
await MyModel.findOne();



app.use('/api/tshirts', tshirtRoutes);
app.listen(5000, () => console.log('Server running on http://localhost:5000'));





app.get("/test",async (req,res2) =>{
  let picture = await MyModel.find().limit(-1).skip(Math.floor(Math.random() *await MyModel.collection.countDocuments())).findOne();
  res2.send("<IMG src=\""+picture.imageUrl+"\" alt=\""+picture.name+"\"/>")}
);


