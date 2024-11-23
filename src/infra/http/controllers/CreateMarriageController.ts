import { Request, Response } from "express";
import { makeCreateMarriageUseCaseFactory } from "../../../main/factories/makeCreateMarriageUseCaseFactory";

export const createMarriageController = async (
  request: Request,
  response: Response
) => {
  try {
    const useCase = makeCreateMarriageUseCaseFactory();

    const marriage = {
      person1: request.body.data.person1,
      person2: request.body.data.person2,
      numberGuests: request.body.data.numberGuests,
      party: request.body.data.party,
      religious: request.body.data.religious,
      honeyMoon: request.body.data.honeyMoon,
      season: request.body.data.season,
      religion: request.body.data.religion,
      city: request.body.data.city,
      style: request.body.data.style,
      time: request.body.data.time,
      local: request.body.data.local,
      budget: request.body.data.budget,
      localHoneyMoon: request.body.data.localHoneyMoon,
      userId: Number(request.headers?.id),
    };

    const createdMarriage = await useCase.create(marriage);

    return response.status(201).json({ createdMarriage });
  } catch (err) {
    console.error(err);
    return response.status(400).json({ error: err });
  }
};
