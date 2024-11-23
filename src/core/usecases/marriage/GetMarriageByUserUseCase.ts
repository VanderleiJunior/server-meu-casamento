import { IGetMarriageByUserUseCase } from "../../../interface/core/usecases/Marriage/IGetMarriageByUserUseCase";
import { GetMarriageByUserIdRepository } from "../../domain/repositories/marriageRepository/GetMarriageByUserIdRepository";

export class GetMarriageByUserUseCase implements IGetMarriageByUserUseCase {
  constructor(
    private readonly getMarriageByUserIdRepository: GetMarriageByUserIdRepository
  ) {}

  async getByUserId(
    userId: number
  ): Promise<IGetMarriageByUserUseCase.getOutput[]> {
    try {
      return await this.getMarriageByUserIdRepository.getByUserId(userId);
    } catch (err) {
      throw err;
    }
  }
}
