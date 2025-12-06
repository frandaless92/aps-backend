import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
});

export default mongoose.model("Producto", ProductoSchema);
