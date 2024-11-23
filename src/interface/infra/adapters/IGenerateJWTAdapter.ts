export interface IGenerateJWTAdapter {
  generate(user: IGenerateJWTAdapter.generateInput): String;
}

export namespace IGenerateJWTAdapter {
  export type generateInput = {
    id: number;
    name: string;
    email: string;
    // access: { id: number; name: string }[];
  };
}
