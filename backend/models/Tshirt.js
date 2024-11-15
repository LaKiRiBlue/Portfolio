import mongoose from 'mongoose';

const tshirtSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

export default mongoose.model('Tshirt', tshirtSchema);
