import { CreateUserRepository } from "../../domain/repositories/userRepository/CreateUserRepository";
import { ICryptPasswordAdapter } from "../../../interface/infra/adapters/ICryptPasswordAdapter";
import { ICreateUserUseCase } from "../../../interface/core/usecases/User/ICreateUserUseCase";
import validatePasswordString from "../../../shared/helpers/validatePasswordString";
import validateEmail from "../../../shared/helpers/validateEmail";
import validateCPF from "../../../shared/helpers/validateCPF";
import { CreateAccessUserRepository } from "../../domain/repositories/accessUserRepository/CreateAccessUserRepository";
import { access } from "fs";

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly cryptPasswordAdapter: ICryptPasswordAdapter
  ) {}
  async create(
    user: ICreateUserUseCase.createInput
  ): Promise<ICreateUserUseCase.createOutput> {
    try {
      this.validateData(user);

      const cryptPassword = await this.cryptPasswordAdapter.encrypt(
        user.password
      );

      user = {
        ...user,
        password: cryptPassword,
      };

      const userCreated = await this.createUserRepository.create(user);

      const response = {
        id: userCreated.id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.email,
      };

      return response;
    } catch (err) {
      throw err;
    }
  }

  private validateData(user: ICreateUserUseCase.createInput): boolean {
    const isValidEmail = validateEmail(user.email);
    const isValidPassword = validatePasswordString(user.password);

    if (!isValidEmail) {
      throw new Error("Invalid Email");
    }
    if (!isValidPassword) {
      throw new Error("Invalid Password");
    }

    return true;
  }
}
