import { PayloadTokenDto } from "src/auth/dto/payload-token.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersController } from "./users.controller";

describe('Users Controllers', () => {
    let controller: UsersController;

    const usersServiceMock = {
        findOne: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        uploadAvatarImage: jest.fn(),
    }

    beforeEach(() => {
        controller = new UsersController(usersServiceMock as any);
    })

    it('should find One user', async () => {
        const userId = 1;
        await controller.findOneUser(userId);
        expect(usersServiceMock.findOne).toHaveBeenCalledWith(userId);
    })

    it('should create a new user', async () => {
        const createUserDto: CreateUserDto = {
            name: 'Berg',
            email: 'berg@gmail.com',
            password: '123456',
        }
        const mockUser = {
            id: 1,
            name: 'Berg',
            email: 'berg@gmail.com',
        }

        jest.spyOn(usersServiceMock, 'create').mockResolvedValue(mockUser)

        const result = await controller.create(createUserDto)



        await controller.create(createUserDto);
        expect(usersServiceMock.create).toHaveBeenCalledWith(createUserDto);

        expect(result).toEqual(mockUser);
    })

    it('should update user', async () => {
        const userId = 1;
        const updateUserDto: UpdateUserDto = {
            name: 'Berg Novo',
        }

        const tokenPayload: PayloadTokenDto = {
            sub: userId,
            aud: '',
            email: '',
            exp: 1,
            iat: 1,
            iss: ''
          }

        const updatedUser = {
            id: userId,
            name: 'Berg',
            email: 'berg@gmail.com',
        }

        await controller.update(updatedUser.id, updateUserDto, tokenPayload);

        jest.spyOn(usersServiceMock, 'update').mockResolvedValue(updatedUser)

        const result = await controller.update(userId, updateUserDto, tokenPayload)

        expect(usersServiceMock.update).toHaveBeenCalledWith(userId, updateUserDto, tokenPayload);

        expect(result).toEqual(updatedUser);
    } )

    it('should delete user ', async () => {
        const userId = 1;
        const tokenPayload: PayloadTokenDto = {
            sub: userId,
            aud: '',
            email: '',
            exp: 1,
            iat: 1,
            iss: ''
        }

        await controller.delete(userId, tokenPayload);
        expect(usersServiceMock.delete).toHaveBeenCalledWith(userId,tokenPayload)
    })

    it('should upload avatar image', async () => {
        const tokenPayload: PayloadTokenDto = {
            sub: 1,
            aud: '',
            email: '',
            exp: 1,
            iat: 1,
            iss: ''
        }

        const mockFile = {
            originalname: 'avatar.png',
            mimetype: 'image/png',
            buffer: Buffer.from("mock")
          } as Express.Multer.File;

        await controller.uploadAvatar(tokenPayload, mockFile);

        expect(usersServiceMock.uploadAvatarImage).toHaveBeenCalledWith(tokenPayload, mockFile);
    })
})