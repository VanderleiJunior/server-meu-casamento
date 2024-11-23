export interface CreateUserRepository {
  create(
    user: CreateUserRepository.createInput
  ): Promise<CreateUserRepository.createOutput>;
}

export namespace CreateUserRepository {
  export type createOutput = {
    id: number;
    name: string;
    password: string;
    email: string;
  };
  export type createInput = {
    name: string;
    password: string;
    email: string;
  };
}
