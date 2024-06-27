import { Router } from "express";

// Inicializa rotas do usuário - necessita de token
const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
  res.sendStatus(200);
});

export default usersRoutes;
