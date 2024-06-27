import { Router } from "express";
import { UserInterface } from "../interfaces/UserInterface";
import { TokenService } from "../services/TokenService";

// Inicia rotas de autenticação
const authRoutes = Router();
const tokenService = new TokenService();

// Rota /auth - busca token
authRoutes.get("/", (req, res) => {
  const user: UserInterface = {
    name: "lucas",
    email: "xxxxxx@xxxx.com",
  };

  // Gera um token para o usuário
  const accessToken = tokenService.generateToken(user);

  // Envia resposta
  res.send({
    token: accessToken,
  });
});

export default authRoutes;
