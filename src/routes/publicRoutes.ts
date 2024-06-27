import { Router } from "express";

// Inicializa rotas públicas - não é necessário autenticação
const publicRouter = Router();

publicRouter.get("/", (req, res) => {
  res.sendStatus(200);
});

export default publicRouter;
