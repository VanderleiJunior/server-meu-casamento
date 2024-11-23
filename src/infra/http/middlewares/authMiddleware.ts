import { NextFunction, Request, Response } from "express";
import { JWTAdapter } from "../../adapters/JWTAdapter";

export const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const bearerToken = request.headers?.authorization;

    if (!bearerToken) {
      response.status(401).json({ error: "Bearer Token invalid" });
      return;
    }

    const jwtAdapter = new JWTAdapter();

    const token = bearerToken.split(" ")[1];

    const validateUser = await jwtAdapter.verify(token);

    if (!validateUser) {
      response.status(401).json({ error: "Bearer Token invalid" });
      return;
    }

    request.headers.id = `${validateUser.id}`;
    request.headers.name = validateUser.name;
    request.headers.email = validateUser.email;

    next();
  } catch (err) {
    response.status(401).json({ error: "Bearer Token invalid" });
  }
};
