import { IDeleteMarriageUseCase } from "../../../interface/core/usecases/Marriage/IDeleteMarriageUseCase";
import { DeleteMarriageByIdRepository } from "../../domain/repositories/marriageRepository/DeleteMarriageByIdRepository";

export class DeleteMarriageUseCase implements IDeleteMarriageUseCase {
  constructor(
    private readonly deleteMarriageByIdRepository: DeleteMarriageByIdRepository
  ) {}

  async delete(id: number): Promise<IDeleteMarriageUseCase.deleteOutput> {
    try {
      return await this.deleteMarriageByIdRepository.deleteById(id);
    } catch (err) {
      throw err;
    }
  }
}
