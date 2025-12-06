import express from "express";
import Presupuesto from "../models/Presupuesto.js";
import { PDFDocument, StandardFonts } from "pdf-lib";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const presupuesto = await Presupuesto.create(req.body);

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let y = 760;

    page.drawText(`Presupuesto`, { x: 50, y, size: 20, font });
    y -= 30;

    page.drawText(`Cliente: ${presupuesto.cliente.nombre}`, {
      x: 50,
      y,
      size: 12,
    });
    y -= 20;

    presupuesto.items.forEach((item) => {
      page.drawText(
        `${item.nombre} - Cant: ${item.cantidad}  - $${item.subtotal}`,
        { x: 50, y, size: 12 }
      );
      y -= 20;
    });

    y -= 20;
    page.drawText(`Total: $${presupuesto.total}`, { x: 50, y, size: 14 });

    const pdfBytes = await pdfDoc.save();

    res.setHeader("Content-Type", "application/pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error generando PDF" });
  }
});

export default router;
