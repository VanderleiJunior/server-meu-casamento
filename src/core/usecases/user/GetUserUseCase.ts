import { IGetUserUseCase } from "../../../interface/core/usecases/User/IGetUserUseCase";
import { GetByIdUserRepository } from "../../domain/repositories/userRepository/GetByIdUserRepository";

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private readonly getUserRepository: GetByIdUserRepository) {}

  async get(id: number): Promise<IGetUserUseCase.getOutput> {
    const user = await this.getUserRepository.getById(id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
