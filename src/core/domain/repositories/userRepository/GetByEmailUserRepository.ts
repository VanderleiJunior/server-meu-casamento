export interface GetByEmailUserRepository {
  getByEmail(email: string): Promise<GetByEmailUserRepository.getByEmailOutput>;
}

export namespace GetByEmailUserRepository {
  export type getByEmailOutput = {
    id: number;
    name: string;
    password: string;
    email: string;
  };
}
