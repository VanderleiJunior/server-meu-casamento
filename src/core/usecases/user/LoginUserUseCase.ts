import { ILoginUserUseCase } from "../../../interface/core/usecases/User/ILoginUserUseCase";
import { IGenerateJWTAdapter } from "../../../interface/infra/adapters/IGenerateJWTAdapter";
import { IVerifyPasswordAdapter } from "../../../interface/infra/adapters/IVerifyPasswordAdapter";
import { GetByEmailUserRepository } from "../../domain/repositories/userRepository/GetByEmailUserRepository";

export class LoginUserUseCase implements ILoginUserUseCase {
  constructor(
    private readonly getUserByEmailRepository: GetByEmailUserRepository,
    private readonly verifyPasswordAdapter: IVerifyPasswordAdapter,
    private readonly jwtAdapter: IGenerateJWTAdapter
  ) {}

  async login(user: ILoginUserUseCase.loginInput): Promise<String> {
    try {
      const userDb = await this.getUserByEmailRepository.getByEmail(user.email);
      if (!userDb) throw new Error("Not find User.");

      const verify = await this.verifyPasswordAdapter.verify(
        user.password,
        userDb.password
      );
      console.log(verify);

      if (!verify) throw new Error("Unauthorized");

      const token = this.jwtAdapter.generate(userDb);

      return token;
    } catch (err) {
      throw err;
    }
  }
}
