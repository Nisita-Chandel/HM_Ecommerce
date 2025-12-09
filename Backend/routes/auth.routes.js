// routes/auth.routes.js
import express from "express";
import { authUser, registerUser, getProfile } from "../controllers/auth.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getProfile);

export default router;
