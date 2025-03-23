// Testes unitários

import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "./users.service";
import { HashingServiceProtocol } from 'src/auth/hash/hashing.service';
import { Test, TestingModule } from "@nestjs/testing";


describe('UsersService', () => {
    let userService: UsersService;
    let prismaService: PrismaService;
    let hashingService:HashingServiceProtocol;

    beforeEach ( async ()=> {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService , {
                provide: PrismaService,
                useValue: {},
            },
            {
                provide: HashingServiceProtocol,
                useValue: {},
            }],
            
        }).compile();

        userService = module.get(UsersService);
        prismaService = module.get(PrismaService);
        hashingService = module.get(HashingServiceProtocol);
    })
    it('should be define users service', () => {
       expect(userService).toBeDefined();
    })
})