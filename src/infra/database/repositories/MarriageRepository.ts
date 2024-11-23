import { Op } from "sequelize";
import { Marriage } from "../models/Marriage";
import { CreateMarriageRepository } from "../../../core/domain/repositories/marriageRepository/CreateMarriageRepository";
import { DeleteMarriageByIdRepository } from "../../../core/domain/repositories/marriageRepository/DeleteMarriageByIdRepository";
import { GetMarriageByUserIdRepository } from "../../../core/domain/repositories/marriageRepository/GetMarriageByUserIdRepository";
import { UpdateByIdMarriageRepository } from "../../../core/domain/repositories/marriageRepository/UpdateByIdMarriageRepository";

export class MarriageRepositorySequelize
  implements
    CreateMarriageRepository,
    DeleteMarriageByIdRepository,
    GetMarriageByUserIdRepository,
    UpdateByIdMarriageRepository
{
  async create(
    marriage: CreateMarriageRepository.createInput
  ): Promise<CreateMarriageRepository.createOutput> {
    const newMarriage = await Marriage.create({
      ...marriage,
      religion: marriage.religion ?? "",
    });

    return {
      id: newMarriage.id,
      person1: newMarriage.person1,
      person2: newMarriage.person2,
      numberGuests: newMarriage.numberGuests,
      party: newMarriage.party,
      religious: newMarriage.religious,
      honeyMoon: newMarriage.honeyMoon,
      season: newMarriage.season,
      religion: newMarriage.religion,
      city: newMarriage.city,
      style: newMarriage.style,
      time: newMarriage.time,
      local: newMarriage.local,
      budget: newMarriage.budget,
      localHoneyMoon: newMarriage.localHoneyMoon,
      userId: newMarriage.userId,
    };
  }

  async deleteById(
    id: number
  ): Promise<DeleteMarriageByIdRepository.deleteOutput> {
    const marriage = await Marriage.findByPk(id);

    if (!marriage) {
      return {
        success: false,
        message: `Casamento com ID ${id} não encontrado.`,
      };
    }

    await marriage.destroy();

    return {
      success: true,
      message: `Casamento com ID ${id} foi excluído com sucesso.`,
    };
  }

  async getByUserId(
    userId: number
  ): Promise<GetMarriageByUserIdRepository.getByUserIdOutput[]> {
    const marriages = await Marriage.findAll({
      where: { userId },
    });

    return marriages.map((marriage) => ({
      id: marriage.id,
      person1: marriage.person1,
      person2: marriage.person2,
      numberGuests: marriage.numberGuests,
      party: marriage.party,
      religious: marriage.religious,
      honeyMoon: marriage.honeyMoon,
      season: marriage.season,
      religion: marriage.religion,
      city: marriage.city,
      style: marriage.style,
      time: marriage.time,
      local: marriage.local,
      budget: marriage.budget,
      localHoneyMoon: marriage.localHoneyMoon,
      userId: marriage.userId,
    }));
  }

  async updateById(
    id: number,
    data: UpdateByIdMarriageRepository.updateInput
  ): Promise<UpdateByIdMarriageRepository.updateOutput> {
    const marriage = await Marriage.findByPk(id);

    if (!marriage) {
      throw new Error(`Casamento com ID ${id} não encontrado.`);
    }

    await marriage.update(data);

    return {
      id: marriage.id,
      person1: marriage.person1,
      person2: marriage.person2,
      numberGuests: marriage.numberGuests,
      party: marriage.party,
      religious: marriage.religious,
      honeyMoon: marriage.honeyMoon,
      season: marriage.season,
      religion: marriage.religion,
      city: marriage.city,
      style: marriage.style,
      time: marriage.time,
      local: marriage.local,
      budget: marriage.budget,
      localHoneyMoon: marriage.localHoneyMoon,
      userId: marriage.userId,
    };
  }
}
