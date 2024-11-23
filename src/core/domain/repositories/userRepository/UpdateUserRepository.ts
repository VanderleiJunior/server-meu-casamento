export interface UpdateUserRepository {
  update(
    user: UpdateUserRepository.updateInput
  ): Promise<UpdateUserRepository.updateOutput>;
}

export namespace UpdateUserRepository {
  export type updateOutput = {
    id: number;
    name: string;
    password: string;
    email: string;
  };
  export type updateInput = {
    name?: string;
    password?: string;
    email: string;
  };
}
