// Testes unitários

import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "./users.service";
import { HashingServiceProtocol } from 'src/auth/hash/hashing.service';
import { Test, TestingModule } from "@nestjs/testing";
import { CreateUserDto } from "./dto/create-user.dto";


describe('UsersService', () => {
    let userService: UsersService;
    let prismaService: PrismaService;
    let hashingService:HashingServiceProtocol;

    beforeEach ( async ()=> {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService , {
                provide: PrismaService,
                useValue: {
                    user:{
                        create: jest.fn(),
                    }
                },
            },
            {
                provide: HashingServiceProtocol,
                useValue: {
                    hash: jest.fn(),
                },
            }],
            
        }).compile();

        userService = module.get(UsersService);
        prismaService = module.get(PrismaService);
        hashingService = module.get(HashingServiceProtocol);
    })
    it('should be define users service', () => {
       expect(userService).toBeDefined();
    })

    it('should create a new user',async () => {
        const createUserDto: CreateUserDto = {
            name: 'Teste',
            email: 'q0Jd5@example.com',
            password: '123456',
        }
        jest.spyOn(hashingService, 'hash').mockResolvedValue("HASH_MOCK_EXEMPLO")
        
        await userService.create(createUserDto);

        expect(hashingService.hash).toHaveBeenCalled();
        expect(prismaService.user.create).toHaveBeenCalledWith({
            data: {
                name: createUserDto.name,
                email: createUserDto.email,
                passwordHash: "HASH_MOCK_EXEMPLO",
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

    })
})