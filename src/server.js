import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

import productosRoutes from "./routes/productos.js";
import clientesRoutes from "./routes/clientes.js";
import presupuestosRoutes from "./routes/presupuestos.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/productos", productosRoutes);
app.use("/clientes", clientesRoutes);
app.use("/presupuestos", presupuestosRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando ✔");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
