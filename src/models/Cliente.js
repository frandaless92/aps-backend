import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  dni: String,
  cuit: String,
});

export default mongoose.model("Cliente", ClienteSchema);
