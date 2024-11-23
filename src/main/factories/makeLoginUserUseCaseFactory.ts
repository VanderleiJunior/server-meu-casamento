import { LoginUserUseCase } from "../../core/usecases/user/LoginUserUseCase";
import { BcryptAdapter } from "../../infra/adapters/CryptPasswordAdapter";
import { JWTAdapter } from "../../infra/adapters/JWTAdapter";
import { UserRepositorySequelize } from "../../infra/database/repositories/UserRepository";

export const makeLoginUserUseCaseFactory = () => {
  const getUserRepository = new UserRepositorySequelize();
  const verifyPasswordAdapter = new BcryptAdapter();
  const jwtAdapter = new JWTAdapter();

  return new LoginUserUseCase(
    getUserRepository,
    verifyPasswordAdapter,
    jwtAdapter
  );
};
