export interface ICreateMarriageUseCase {
  create(
    marriage: ICreateMarriageUseCase.createInput
  ): Promise<ICreateMarriageUseCase.createOutput>;
}

export namespace ICreateMarriageUseCase {
  export type createInput = {
    person1: string;
    person2: string;
    numberGuests: number;
    party: string;
    religious: string;
    honeyMoon: string;
    season: string;
    religion?: string;
    city: string;
    style: string;
    time: string;
    local: string;
    budget: number;
    localHoneyMoon?: string;
    userId: number;
  };

  export type createOutput = {
    id: number;
    person1: string;
    person2: string;
    numberGuests: number;
    party: string;
    religious: string;
    honeyMoon: string;
    season: string;
    religion?: string;
    city: string;
    style: string;
    time: string;
    local: string;
    budget: number;
    localHoneyMoon?: string;
    userId: number;
  };
}
