import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

import provinceRoutes from "./routes/provinceRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

app.use("/api/provinces", provinceRoutes);
app.use("/api/cities", cityRoutes);

app.listen(3000);
