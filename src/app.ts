import express from "express";

const app = express();

import provinceRoutes from "./routes/provinceRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

app.use("/api/provinces", provinceRoutes);
app.use("/api/city", cityRoutes);

app.listen(3000);
