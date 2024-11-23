import { IGenerateJWTAdapter } from "../../interface/infra/adapters/IGenerateJWTAdapter";
import jwt from "jsonwebtoken";
import { config } from "../../main/config";
import { IVerifyJWTAdapter } from "../../interface/infra/adapters/IVerifyJWTAdapter";

export class JWTAdapter implements IGenerateJWTAdapter, IVerifyJWTAdapter {
  secret = config.secret;
  generate(user: IGenerateJWTAdapter.generateInput): String {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    if (!this.secret) throw new Error("Secret not found");

    const expiresIn = config.loginTime;

    const token = jwt.sign(payload, this.secret, { expiresIn: expiresIn });

    return token;
  }

  verify(token: string): IVerifyJWTAdapter.verifyOutput {
    try {
      if (!this.secret) throw new Error("Secret not found");

      const decodedToken: any = jwt.verify(token, this.secret);

      return {
        id: decodedToken?.id,
        name: decodedToken?.name,
        email: decodedToken?.email,
      };
    } catch (err) {
      throw err;
    }
  }
}
