import express from "express";
import clubRoutes from "./routes/clubRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import conquistadoresRoutes from "./routes/conquistadores.routes.js";
import clasesRoutes from "./routes/clases.js";
import requisitosRoutes from "./routes/requisitos.js";
import progresoRoutes from "./routes/progreso.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clases", clasesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/conquistadores", conquistadoresRoutes);
app.use("/api/requisitos", requisitosRoutes);
app.use("/api/progreso", progresoRoutes);

export default app;
