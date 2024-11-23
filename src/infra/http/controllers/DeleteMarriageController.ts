import { Request, Response } from "express";
import { makeDeleteMarriageUseCaseFactory } from "../../../main/factories/makeDeleteMarriageUseCaseFactory";

export const deleteMarriageController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeDeleteMarriageUseCaseFactory();

    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: "Marriage ID is required" });
    }

    const result = await useCase.delete(Number(id));

    return response.status(200).json({ result });
  } catch (err) {
    console.error(err);
    return response.status(400).json({ error: err });
  }
};
