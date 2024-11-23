import { Request, Response } from "express";
import { makeGetMarriageByUserUseCaseFactory } from "../../../main/factories/makeGetMarriageByUserUseCaseFactory";

export const getMarriageByUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeGetMarriageByUserUseCaseFactory();

    const userId = request.params.userId; // Deve ser passado nos parâmetros

    if (!userId) {
      return response.status(400).json({ error: "User ID is required" });
    }

    const marriages = await useCase.getByUserId(Number(userId));

    return response.status(200).json({ marriages });
  } catch (err) {
    console.error(err);
    return response.status(400).json({ error: err });
  }
};
