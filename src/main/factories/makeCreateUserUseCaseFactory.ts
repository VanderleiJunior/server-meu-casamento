import { CreateUserUseCase } from "../../core/usecases/user/CreateUserUseCase";
import { BcryptAdapter } from "../../infra/adapters/CryptPasswordAdapter";
import { UserRepositorySequelize } from "../../infra/database/repositories/UserRepository";

export const makeCreateUserUseCaseFactory = () => {
  const createUserRepository = new UserRepositorySequelize();
  const cryptPasswordAdapter = new BcryptAdapter();

  return new CreateUserUseCase(createUserRepository, cryptPasswordAdapter);
};
