export interface IDeleteMarriageUseCase {
  delete(id: number): Promise<IDeleteMarriageUseCase.deleteOutput>;
}

export namespace IDeleteMarriageUseCase {
  export type deleteOutput = {
    success: boolean;
    message: string;
  };
}
