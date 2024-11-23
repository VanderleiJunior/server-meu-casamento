import { UpdateMarriageUseCase } from "../../core/usecases/marriage/UpdateMarriageUseCase";
import { MarriageRepositorySequelize } from "../../infra/database/repositories/MarriageRepository";

export const makeUpdateMarriageUseCaseFactory = () => {
  const marriageRepository = new MarriageRepositorySequelize();
  return new UpdateMarriageUseCase(marriageRepository);
};
