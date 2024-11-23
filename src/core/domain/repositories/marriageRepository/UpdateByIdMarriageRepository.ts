export interface UpdateByIdMarriageRepository {
  updateById(
    id: number,
    data: UpdateByIdMarriageRepository.updateInput
  ): Promise<UpdateByIdMarriageRepository.updateOutput>;
}

export namespace UpdateByIdMarriageRepository {
  export type updateInput = {
    person1?: string;
    person2?: string;
    numberGuests?: number;
    party?: string;
    religious?: string;
    honeyMoon?: string;
    season?: string;
    religion?: string;
    city?: string;
    style?: string;
    time?: string;
    local?: string;
    budget?: number;
    localHoneyMoon?: string;
    userId?: number;
  };

  export type updateOutput = {
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
