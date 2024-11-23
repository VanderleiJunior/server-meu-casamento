export interface IUpdateUserUseCase {
  update(
    user: IUpdateUserUseCase.updateInput
  ): Promise<IUpdateUserUseCase.updateOutput>;
}

export namespace IUpdateUserUseCase {
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
