import mongoose from "mongoose";

const PresupuestoSchema = new mongoose.Schema({
  cliente: Object,
  items: Array,
  total: Number,
  fecha: String,
});

export default mongoose.model("Presupuesto", PresupuestoSchema);
