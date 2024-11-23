export interface ICreateUserUseCase {
  create(
    user: ICreateUserUseCase.createInput
  ): Promise<ICreateUserUseCase.createOutput>;
}

export namespace ICreateUserUseCase {
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
