import { IUpdateUserUseCase } from "../../../interface/core/usecases/User/IUpdateUserUseCase";
import { UpdateUserRepository } from "../../domain/repositories/userRepository/UpdateUserRepository";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly updateUserRepository: UpdateUserRepository) {}

  async update(
    user: IUpdateUserUseCase.updateInput
  ): Promise<IUpdateUserUseCase.updateOutput> {
    const updatedUser = await this.updateUserRepository.update({
      email: user.email,
      password: user?.password,
      name: user?.name,
    });

    return updatedUser;
  }
}
