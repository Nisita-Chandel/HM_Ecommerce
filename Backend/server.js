// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Razorpay from "razorpay";
import connectDB from "./config/db.js";

import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// ------------------------------------
// RAZORPAY SETUP
// ------------------------------------
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ------------------------------------
// CREATE RAZORPAY ORDER
// ------------------------------------
app.post("/api/payment/order", async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const options = {
      amount: amount * 100, // INR → paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);

    return res.status(500).json({
      message: "Razorpay order creation failed",
      error: error.message,
    });
  }
});

// ------------------------------------
// ROOT TEST ROUTE
// ------------------------------------
app.get("/", (req, res) => {
  res.send("HM Backend API is running...");
});

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
