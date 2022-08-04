const dbHandler = require('../db-handler');
const userModel = require("../../models/userModel/index.js");
const userModel_Mock = {
    email: 'asdfgh@dfghj.com',
    firstName: 'asdfghj',
    lastName: 'sdfghjk',
    passwordHash: 'asdfghjkcxsdertyuil', 
    phone: 1234567890,
    address: 'asdfkmnbvcdrt',
    total_points: 234567,
    Watchgroup: [
      { content_id: 1234567, content_name: '54678', schedule_date: 22/8/2020 },
    ],
  };
  const userModel_Mock2 = {
    email: 'asdfgh@dfghj.com',
    firstName: 'asdfghj',
    lastName: 'sdfghjk',
    passwordHash: 'asdfghjkcxsdertyuil', 
    phone: 1234567890,
    address: 'asdfkmnbvcdrt',
    total_points: 1234567,
    Watchgroup: [
      { content_id: 1234567, content_name: '54678', schedule_date: 22/8/2020 },
    ],
    dummy_field: 'hsdd'
  };

jest.setTimeout(3000000);    
/**
 * Connection with new memory mongo database server before running tests.
 */
 beforeAll(async () => await dbHandler.connect());

 /**
  * Clearing all the test data after each test completion.
  */
 afterEach(async () => await dbHandler.clearDatabase());
 
 /**
  * Removing and closing the mock db and mock server.
  */
 afterAll(async () => await dbHandler.closeDatabase());

 
describe('User Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect

    it('create & save user successfully', async () => {
        const validUser = new userModel(userModel_Mock);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser.email).toBe(userModel_Mock.email);
        expect(savedUser.firstName).toBe(userModel_Mock.firstName);
        expect(savedUser.lastName).toBe(userModel_Mock.lastName);
        expect(savedUser.passwordHash).toBe(userModel_Mock.passwordHash);
        expect(savedUser.phone).toBe(userModel_Mock.phone);
        expect(savedUser.address).toBe(userModel_Mock.address);
        expect(savedUser.total_points).toBe(userModel_Mock.total_points);
        expect(savedUser.content_id).toBe(userModel_Mock.content_id);
        expect(savedUser.content_name).toBe(userModel_Mock.content_name);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new userModel(userModel_Mock2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField.email).toBeDefined();
        expect(savedUserWithInvalidField.dummy_field).toBeUndefined();
    });
    
})
