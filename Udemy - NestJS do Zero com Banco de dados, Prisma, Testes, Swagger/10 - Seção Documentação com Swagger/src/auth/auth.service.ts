import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signIn.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingServiceProtocol } from './hash/hashing.service';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly hashingService: HashingServiceProtocol,

        @Inject(jwtConfig.KEY)
        private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
        private readonly jtwService: JwtService
    ) {}

    async authenticate(signInDto: SignInDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: signInDto.email,
                active: true
            }
        })

        if (!user) {
            throw new HttpException('Falha ao autenticar usuario', HttpStatus.UNAUTHORIZED)
        }

        const passwordIsValid = await this.hashingService.compare(signInDto.password, user.passwordHash)

        if (!passwordIsValid) {
            throw new HttpException('Senha ou Usuario incorretos', HttpStatus.UNAUTHORIZED)
        }

        const token = await this.jtwService.signAsync(
            {
                sub: user.id,
                email: user.email
            },{
                secret: this.jwtConfiguration.secret,
                expiresIn: this.jwtConfiguration.jwtTtl,
                audience: this.jwtConfiguration.audience,
                issuer: this.jwtConfiguration.issuer
            }
        )

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                token: token
            }
        }
    }
}
