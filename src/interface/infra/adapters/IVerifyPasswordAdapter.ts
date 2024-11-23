export interface IVerifyPasswordAdapter {
  verify(password: string, hash: string): Promise<boolean>;
}
