export interface GetByIdUserRepository {
  getById(id: number): Promise<GetByIdUserRepository.getByIdOutput>;
}

export namespace GetByIdUserRepository {
  export type getByIdOutput = {
    id: number;
    name: string;
    password: string;
    email: string;
  };
}
