import { ICreateMarriageUseCase } from "../../../interface/core/usecases/Marriage/ICreateMarriageUseCase";
import { CreateMarriageRepository } from "../../domain/repositories/marriageRepository/CreateMarriageRepository";

export class CreateMarriageUseCase implements ICreateMarriageUseCase {
  constructor(
    private readonly createMarriageRepository: CreateMarriageRepository
  ) {}

  async create(
    marriage: ICreateMarriageUseCase.createInput
  ): Promise<ICreateMarriageUseCase.createOutput> {
    try {
      this.validateData(marriage);

      const marriageCreated = await this.createMarriageRepository.create(
        marriage
      );

      return {
        id: marriageCreated.id,
        person1: marriageCreated.person1,
        person2: marriageCreated.person2,
        numberGuests: marriageCreated.numberGuests,
        party: marriageCreated.party,
        religious: marriageCreated.religious,
        honeyMoon: marriageCreated.honeyMoon,
        season: marriageCreated.season,
        religion: marriageCreated.religion,
        city: marriageCreated.city,
        style: marriageCreated.style,
        time: marriageCreated.time,
        local: marriageCreated.local,
        budget: marriageCreated.budget,
        localHoneyMoon: marriageCreated.localHoneyMoon,
        userId: marriageCreated.userId,
      };
    } catch (err) {
      throw err;
    }
  }

  private validateData(marriage: ICreateMarriageUseCase.createInput): boolean {
    if (!marriage.person1 || !marriage.person2) {
      throw new Error("Person1 and Person2 are required");
    }

    if (marriage.numberGuests <= 0) {
      throw new Error("Number of guests must be greater than 0");
    }

    if (marriage.budget <= 0) {
      throw new Error("Budget must be greater than 0");
    }

    return true;
  }
}
