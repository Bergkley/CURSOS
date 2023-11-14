import { User, UserInstance } from '../models/User';
import * as UserService from './User.Service';

describe('Testing user service', () => {

    const email = 'test@jest.com';
    const password = '1234';

    beforeAll(async () => {
        await User.sync({ force: true }).catch(err => console.log('Erro encontrado', err)); // sincroniza ao banco apagando as tabelas e criando novas
    });


    it('Should create a new user', async () => {
        const newUser = await UserService.createUser(email, password) as UserInstance;
        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('Should not allow to create a user with an existing email', async () => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).toBeInstanceOf(Error);
    });

    it('Should find an user by email', async () => {
        const user = await UserService.findbyEmail(email) as UserInstance;
        expect(user).not.toBeNull();
    });

    it('Should match the password from database', async () => {
        const user = await UserService.findbyEmail(email) as UserInstance;
        const match = UserService.matchPassword(password, user.password);
        expect(match).toBeTruthy();
    });

    it('Should not match the password from database', async () => {
        const user = await UserService.findbyEmail(email) as UserInstance;
        const match = await UserService.matchPassword('invalid', user.password);
        expect(match).toBeFalsy();
    });

    it('Should to get a list of users', async () => {
        const users = await UserService.all();
        expect(users.length).toBeGreaterThanOrEqual(0);
        for(const user of users) {
            expect(user).toBeInstanceOf(User);
        }
    });
})