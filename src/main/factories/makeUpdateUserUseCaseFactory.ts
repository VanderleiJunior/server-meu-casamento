import { UpdateUserUseCase } from "../../core/usecases/user/UpdateUserUseCase";
import { UserRepositorySequelize } from "../../infra/database/repositories/UserRepository";

export const makeUpdateUSerUseCaseFactory = () => {
  const updateUserRepository = new UserRepositorySequelize();

  return new UpdateUserUseCase(updateUserRepository);
};
