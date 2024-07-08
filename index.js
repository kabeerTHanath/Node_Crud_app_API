const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Node Api! updataed');
});

mongoose
  .connect(
    'mongodb+srv://admin:kBG9XhbpJ2qHeOWr@backenddb.dq2incf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is Running on : port 3000');
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB', error));
