export interface ILoginUserUseCase {
  login(user: ILoginUserUseCase.loginInput): Promise<String>;
}

export namespace ILoginUserUseCase {
  export type loginInput = {
    password: string;
    email: string;
  };
}
