export interface IGetUserUseCase {
  get(id: number): Promise<IGetUserUseCase.getOutput>;
}

export namespace IGetUserUseCase {
  export type getOutput = {
    id: number;
    name: string;
    email: string;
  };
}
