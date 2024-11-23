import { GetMarriageByUserUseCase } from "../../core/usecases/marriage/GetMarriageByUserUseCase";
import { MarriageRepositorySequelize } from "../../infra/database/repositories/MarriageRepository";

export const makeGetMarriageByUserUseCaseFactory = () => {
  const marriageRepository = new MarriageRepositorySequelize();
  return new GetMarriageByUserUseCase(marriageRepository);
};
