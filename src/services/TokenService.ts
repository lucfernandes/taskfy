import jwt from "jsonwebtoken";
import { UserInterface } from "../interfaces/UserInterface";

/**
 * Classe responsável pela criação e gerenciamento do Token com JWT
 */
export class TokenService {
  /**
   * Método que busca o access token da aplicação
   * @returns access token
   */
  private getAccessToken(): string {
    return process.env.ACCESS_TOKEN_SECRET ?? "";
  }

  /**
   * Método responsável por gerar o token do usuário
   * @param UserInteface user
   * @returns token do usuário
   */
  public generateToken(user: UserInterface): string {
    const accessToken = this.getAccessToken();
    const token = jwt.sign(user, accessToken);
    return token;
  }

  authenticateToken() {}
}
