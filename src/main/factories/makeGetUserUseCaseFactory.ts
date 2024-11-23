import { GetUserUseCase } from "../../core/usecases/user/GetUserUseCase";
import { UserRepositorySequelize } from "../../infra/database/repositories/UserRepository";

export const makeGetUSerUseCaseFactory = () => {
  const getUserRepository = new UserRepositorySequelize();

  return new GetUserUseCase(getUserRepository);
};
