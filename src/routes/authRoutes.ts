import { Router } from "express";
import { UserInterface } from "../interfaces/UserInterface";
import { TokenService } from "../services/TokenService";

const authRoutes = Router();
const tokenService = new TokenService();

authRoutes.get("/", (req, res) => {
  const user: UserInterface = {
    name: "lucas",
    email: "lucasfpf19@gmail.com",
  };

  const accessToken = tokenService.generateToken(user);

  res.send({
    token: accessToken,
  });
});

export default authRoutes;
