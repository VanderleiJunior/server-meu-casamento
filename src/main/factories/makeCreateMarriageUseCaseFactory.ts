import { CreateMarriageUseCase } from "../../core/usecases/marriage/createMarriageUseCase";
import { MarriageRepositorySequelize } from "../../infra/database/repositories/MarriageRepository";

export const makeCreateMarriageUseCaseFactory = () => {
  const marriageRepository = new MarriageRepositorySequelize();
  return new CreateMarriageUseCase(marriageRepository);
};
