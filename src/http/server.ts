import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import publicRouter from "../routes/publicRoutes";
import authRoutes from "../routes/authRoutes";
import usersRoutes from "../routes/usersRoutes";

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", publicRouter);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
