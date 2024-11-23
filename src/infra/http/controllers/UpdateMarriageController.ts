import { Request, Response } from "express";
import { makeUpdateMarriageUseCaseFactory } from "../../../main/factories/makeUpdateMarriageUseCaseFactory";

export const updateMarriageController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeUpdateMarriageUseCaseFactory();

    const { id } = request.params;
    const updateData = request.body;

    const updatedMarriage = await useCase.update(Number(id), updateData);

    return response.status(200).json({ updatedMarriage });
  } catch (err) {
    console.error(err);
    return response.status(400).json({ error: err });
  }
};
