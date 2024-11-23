export interface ICryptPasswordAdapter {
  encrypt(password: string): Promise<string>;
}
