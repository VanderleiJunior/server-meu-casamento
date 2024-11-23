export interface GetMarriageByUserIdRepository {
  getByUserId(
    userId: number
  ): Promise<GetMarriageByUserIdRepository.getByUserIdOutput[]>;
}

export namespace GetMarriageByUserIdRepository {
  export type getByUserIdOutput = {
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
