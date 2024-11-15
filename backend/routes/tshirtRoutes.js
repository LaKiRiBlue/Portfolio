import express from 'express';
const router = express.Router();
import Tshirt from '../models/Tshirt';

router.get('/', async (req, res) => {
  try {
    const tshirts = await Tshirt.find();
    res.json(tshirts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
