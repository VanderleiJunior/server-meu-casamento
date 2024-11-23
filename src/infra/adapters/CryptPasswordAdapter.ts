import bcrypt from "bcrypt";
import { ICryptPasswordAdapter } from "../../interface/infra/adapters/ICryptPasswordAdapter";
import { IVerifyPasswordAdapter } from "../../interface/infra/adapters/IVerifyPasswordAdapter";
import { config } from "../../main/config";

export class BcryptAdapter
  implements ICryptPasswordAdapter, IVerifyPasswordAdapter
{
  async encrypt(password: string): Promise<string> {
    const saltRounds = config.salt;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  async verify(password: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  }
}
