export interface DeleteMarriageByIdRepository {
  deleteById(id: number): Promise<DeleteMarriageByIdRepository.deleteOutput>;
}

export namespace DeleteMarriageByIdRepository {
  export type deleteOutput = {
    success: boolean;
    message: string;
  };
}
