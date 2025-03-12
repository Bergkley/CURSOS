import { Module } from '@nestjs/common';
import { HashingServiceProtocol } from './hash/hashing.service';
import { BcryptService } from './hash/bcrypt.service';

@Module({
    providers: [{provide:HashingServiceProtocol, useClass: BcryptService}],
})
export class AuthModule {}
