import express from "express";
import Producto from "../models/Producto.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

export default router;
