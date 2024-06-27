import jwt from "jsonwebtoken";
import { UserInterface } from "../interfaces/UserInterface";

export class TokenService {
  private getAccessToken(): string {
    return process.env.ACCESS_TOKEN_SECRET ?? "";
  }

  public generateToken(user: UserInterface) {
    const accessToken = this.getAccessToken();
    const token = jwt.sign(user, accessToken);
    return token;
  }
  authenticateToken() {}
}
