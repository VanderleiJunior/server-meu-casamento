import { IUpdateMarriageUseCase } from "../../../interface/core/usecases/Marriage/IUpdateMarriageUseCase";
import { UpdateByIdMarriageRepository } from "../../domain/repositories/marriageRepository/UpdateByIdMarriageRepository";

export class UpdateMarriageUseCase implements IUpdateMarriageUseCase {
  constructor(
    private readonly updateByIdMarriageRepository: UpdateByIdMarriageRepository
  ) {}

  async update(
    id: number,
    data: IUpdateMarriageUseCase.updateInput
  ): Promise<IUpdateMarriageUseCase.updateOutput> {
    try {
      const updatedMarriage =
        await this.updateByIdMarriageRepository.updateById(id, data);

      return updatedMarriage;
    } catch (err) {
      throw err;
    }
  }
}
