export interface IGetMarriageByUserUseCase {
  getByUserId(userId: number): Promise<IGetMarriageByUserUseCase.getOutput[]>;
}

export namespace IGetMarriageByUserUseCase {
  export type getOutput = {
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
