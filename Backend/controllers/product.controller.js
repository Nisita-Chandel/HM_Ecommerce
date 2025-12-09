// controllers/product.controller.js
import Product from "../models/Product.js";
import sampleProducts from "../data/products.js";

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) return res.json(product);
  res.status(404).json({ message: "Product not found" });
};

export const createProduct = async (req, res) => {
  const { name, price, description, category, brand, countInStock, image } = req.body;
  const product = new Product({
    name,
    price,
    description,
    category,
    brand,
    countInStock,
    image,
  });
  const created = await product.save();
  res.status(201).json(created);
};

export const seedProducts = async (req, res) => {
  await Product.deleteMany();
  const created = await Product.insertMany(sampleProducts);
  res.json({ message: "Sample products seeded", count: created.length });
};
