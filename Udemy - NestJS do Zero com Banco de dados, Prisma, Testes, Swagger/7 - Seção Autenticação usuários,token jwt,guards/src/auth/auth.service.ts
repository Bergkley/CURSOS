import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signIn.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingServiceProtocol } from './hash/hashing.service';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private readonly hashingService: HashingServiceProtocol,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ) {}
    

    async authenticate(signInDto: SignInDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: signInDto.email
            }
        })

        if(!user) {
            throw new HttpException("Falha ao fazer login", HttpStatus.UNAUTHORIZED)
        }

        const passowrdIsValid = await this.hashingService.compare(signInDto.password, user.passwordHash)

        if(passowrdIsValid) {
            throw new HttpException("Senha/Usuário incorretos", HttpStatus.UNAUTHORIZED)
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }
}
