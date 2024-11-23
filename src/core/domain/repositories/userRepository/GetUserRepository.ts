export interface GetUserRepository {
  get(
    limit: number,
    page: number,
    filter?: string
  ): Promise<GetUserRepository.getResponse>;
}

export namespace GetUserRepository {
  export type getOutput = {
    id: number;
    name: string;
    password: string;
    email: string;
  };

  export type getResponse = {
    total_items: number;
    users: getOutput[];
  };
}
