require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('Failed to connect to MongoDB Atlas:', err.message);
    process.exit(1);
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 16);

    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    if (page > totalPages) {
      return res.status(400).json({ message: 'Page number exceeds total pages.' });
    }

    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products,
      total: totalProducts,
      totalPages,
      currentPage: page,
      pageSize: products.length,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
