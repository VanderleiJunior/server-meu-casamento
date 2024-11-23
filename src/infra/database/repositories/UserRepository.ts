import { Op } from "sequelize";
import { CreateUserRepository } from "../../../core/domain/repositories/userRepository/CreateUserRepository";
import { GetUserRepository } from "../../../core/domain/repositories/userRepository/GetUserRepository";
import { User } from "../models/User";
import { GetByEmailUserRepository } from "../../../core/domain/repositories/userRepository/GetByEmailUserRepository";
import { GetByIdUserRepository } from "../../../core/domain/repositories/userRepository/GetByIdUserRepository";
import { UpdateUserRepository } from "../../../core/domain/repositories/userRepository/UpdateUserRepository";

export class UserRepositorySequelize
  implements
    CreateUserRepository,
    GetUserRepository,
    GetByEmailUserRepository,
    GetByIdUserRepository,
    UpdateUserRepository
{
  async create(
    user: CreateUserRepository.createInput
  ): Promise<CreateUserRepository.createOutput> {
    const newUser = await User.create({
      name: user.name,
      password: user.password,
      email: user.email,
    });

    return {
      id: newUser.id,
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
    };
  }
  async get(
    limit: number,
    page: number,
    filter?: string
  ): Promise<{ total_items: number; users: GetUserRepository.getOutput[] }> {
    const offset = (page - 1) * limit;

    const whereClause = filter
      ? {
          [Op.or]: [
            { id: { [Op.like]: `%${filter}%` } },
            { name: { [Op.like]: `%${filter}%` } },
            { password: { [Op.like]: `%${filter}%` } },
            { cpf: { [Op.like]: `%${filter}%` } },
            { email: { [Op.like]: `%${filter}%` } },
          ],
        }
      : {};

    const { count, rows } = await User.findAndCountAll({
      where: whereClause,
      limit,
      offset,
    });

    const users = rows.map((user) => ({
      id: user.id,
      name: user.name,
      password: user.password,
      email: user.email,
    }));

    return {
      total_items: count,
      users,
    };
  }
  async getByEmail(
    email: string
  ): Promise<GetByEmailUserRepository.getByEmailOutput> {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error(`User with email ${email} not found.`);
    }

    return {
      id: user.id,
      name: user.name,
      password: user.password,
      email: user.email,
    };
  }
  async getById(id: number): Promise<GetByIdUserRepository.getByIdOutput> {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }

    return {
      id: user.id,
      name: user.name,
      password: user.password,
      email: user.email,
    };
  }
  async update(
    user: UpdateUserRepository.updateInput
  ): Promise<UpdateUserRepository.updateOutput> {
    const userToUpdate = await User.findOne({
      where: {
        email: user.email,
      },
    });

    if (!userToUpdate) {
      throw new Error(`User with email ${user.email} not found.`);
    }

    if (user.name) userToUpdate.name = user.name;
    if (user.password) userToUpdate.password = user.password;

    await userToUpdate.save();

    return {
      id: userToUpdate.id,
      name: userToUpdate.name,
      password: userToUpdate.password,
      email: userToUpdate.email,
    };
  }
}
