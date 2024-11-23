import { Request, Response } from "express";
import { makeLoginUserUseCaseFactory } from "../../../main/factories/makeLoginUserUseCaseFactory";

export const loginUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeLoginUserUseCaseFactory();

    const user = {
      email: request.body?.data?.email,
      password: request.body?.data?.password,
    };

    if (!user.email || !user.password) {
      return response
        .status(400)
        .json({ error: "email and password is required" });
    }

    const login = await useCase.login(user);

    return response.status(200).json({ token: login });
  } catch (err) {
    return response.status(401).json({ error: "email or password invalid" });
  }
};
