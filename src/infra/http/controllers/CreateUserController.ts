import { Request, Response } from "express";
import { makeCreateUserUseCaseFactory } from "../../../main/factories/makeCreateUserUseCaseFactory";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeCreateUserUseCaseFactory();
    const user = {
      name: request.body?.data?.name,
      password: request.body?.data?.password,
      email: request.body?.data?.email,
    };

    const createUser = await useCase.create(user);

    return response.status(201).json({ createUser });
  } catch (err) {
    console.error(err);
    return response.status(400).json({ error: err });
  }
};
