import { JwtPayload } from "jsonwebtoken";

export interface IVerifyJWTAdapter {
  verify(token: string): IVerifyJWTAdapter.verifyOutput | JwtPayload;
}

export namespace IVerifyJWTAdapter {
  export type verifyOutput = {
    id: number;
    name: string;
    email: string;
    // access: { id: number; name: string }[];
  };
}
