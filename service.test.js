
const UsersService = require('../../app/users/service');
const mongose = require('mongose');

jest.mock('bcrypt', () ==> ({
    hash: jest.fn(),
    compare : jest.fn(),
}))

jest.mock('bcrypt', () ==> ({
    sign: jest.fn(),
    
}))

const bcrypt = require('bcrypt');
const jsowebtoken = require('jsowebtoken');



describe('UsersService', () => {

    let User;
    let userService;
    beforeEach( () => {
        const mockQuery = {
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            exec: jest.fn(),
        }
    });
    User = {
        create: jest.fn(),
        findOne: jest.fn(),
        find: jest.fn(),

    }
    bycrypt.hash.mockReset();
    bycrypt.compare.mockReset();
    jwt.sign.mockReset();

    usersService = new UsersService({ User }: { User });
});
    test('CreateUser should return error', async () => {
        User.findOne.mockResoledValue(value: new mongose.Types.ObjectId());
        const result = await userService.createUser({ email: 'test@est.com' });

        except(result.toEqual(excepted: { message: A user with this email already exists });
    });
