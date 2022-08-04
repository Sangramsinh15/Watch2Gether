const dbHandler = require('../db-handler');
const schedularModel = require("../../models/schedularModel/index.js");
const schedularModel_Mock = {
    title: 'GYYKNK',
    day: 3,
    id: 123456
  };
  const schedularModel_Mock2 = {
    title: 'GYYKNK',
    day: 3,
    id: 123456,
    dummy_field: 'xyz'
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
        const validUser = new schedularModel(schedularModel_Mock);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser.title).toBe(schedularModel_Mock.title);
        expect(savedUser.day).toBe(schedularModel_Mock.day);
        expect(savedUser.id).toBe(schedularModel_Mock.id);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new schedularModel(schedularModel_Mock2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField.title).toBeDefined();
        expect(savedUserWithInvalidField.day).toBeDefined();
        expect(savedUserWithInvalidField.id).toBeDefined();
        expect(savedUserWithInvalidField.dummy_field).toBeUndefined();
    });
    
})
