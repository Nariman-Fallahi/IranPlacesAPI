import express from "express";

const app = express();

import provinceRoutes from "./routes/provinceRoutes";
import cityRoutes from "./routes/cityRoutes";

app.use("/api/provinces", provinceRoutes);
app.use("/api/city", cityRoutes);

app.listen(3000);
