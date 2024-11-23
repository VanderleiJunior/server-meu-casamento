import { Request, Response } from "express";
import { makeUpdateUSerUseCaseFactory } from "../../../main/factories/makeUpdateUserUseCaseFactory";

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeUpdateUSerUseCaseFactory();

    const user = {
      name: request.body?.data?.name,
      password: request.body?.data?.password,
      email: request.body?.data?.email,
    };

    if (!user.email) {
      return response.status(400);
    }

    const userUpdated = await useCase.update(user);

    return response.status(200).json({ user: userUpdated });
  } catch (err) {
    return response.status(401);
  }
};
