import { HashingServiceProtocol } from "./hashing.service";
import * as bcrypt from 'bcrypt';

export class BcryptService implements HashingServiceProtocol {
    async hash(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync();

        return bcrypt.hash(password, salt);
    }
    async compare(password: string,passwordHash: string): Promise<boolean> {
        return bcrypt.compare(password,passwordHash)
    }
}