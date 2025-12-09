// routes/product.routes.js
import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  seedProducts,
} from "../controllers/product.controller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/seed", seedProducts); // /api/products/seed
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", protect, admin, createProduct);

export default router;
