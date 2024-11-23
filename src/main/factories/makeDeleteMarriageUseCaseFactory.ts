import { DeleteMarriageUseCase } from "../../core/usecases/marriage/DeleteMarriageUseCase";
import { MarriageRepositorySequelize } from "../../infra/database/repositories/MarriageRepository";

export const makeDeleteMarriageUseCaseFactory = () => {
  const marriageRepository = new MarriageRepositorySequelize();
  return new DeleteMarriageUseCase(marriageRepository);
};
