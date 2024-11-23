export interface CreateMarriageRepository {
  create(
    marriage: CreateMarriageRepository.createInput
  ): Promise<CreateMarriageRepository.createOutput>;
}

export namespace CreateMarriageRepository {
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
}
