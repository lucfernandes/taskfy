import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import publicRouter from "../routes/publicRoutes";
import authRoutes from "../routes/authRoutes";
import usersRoutes from "../routes/usersRoutes";

// Configuração das variáveis de ambiente
dotenv.config();

// Inicializa servidor
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Define as rotas
app.use("/", publicRouter);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

// Inicia servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
