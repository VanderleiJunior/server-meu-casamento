import { Request, Response } from "express";
import { makeGetUSerUseCaseFactory } from "../../../main/factories/makeGetUserUseCaseFactory";

export const getUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeGetUSerUseCaseFactory();

    const id = request.headers?.id;

    if (!id) {
      return response.status(400);
    }

    const user = await useCase.get(Number(id));

    return response.status(200).json({ user: user });
  } catch (err) {
    return response.status(401);
  }
};
