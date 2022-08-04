const dbHandler = require('../db-handler');
const watchGroupModel = require("../../models/watchGroupModel/index.js");
const watchGroupModel_Mock = {
    author: 'dfkxvkls',
    movie_show_id: 12345678,
    watchgroup_id: 12367098,
    watchgroup_title: 'vsuhdvd',
    creation_date: 11/8/2020,
    userlist: [
      {
        firstName: 'fghjkj',
        lastName: 'gjgij',
        email: 'scdjbscdb',
        total_points: 'jghbk',
      },
    ],
  };
  const watchGroupModel_Mock2 = {
    author: 'dfkxvkls',
    movie_show_id: 12345678,
    watchgroup_id: 12367098,
    watchgroup_title: 'vsuhdvd',
    creation_date: 11/8/2020,
    userlist: [
      {
        firstName: 'fghjkj',
        lastName: 'gjgij',
        email: 'scdjbscdb',
        total_points: 'jghbk',
      },
    ],
    dummy_field: 'cndsdde'
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
        const validUser = new watchGroupModel(watchGroupModel_Mock);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser.author).toBe(watchGroupModel_Mock.author);
        expect(savedUser.movie_show_id).toBe(watchGroupModel_Mock.movie_show_id);
        expect(savedUser.watchgroup_id).toBe(watchGroupModel_Mock.watchgroup_id);
        expect(savedUser.watchgroup_title).toBe(watchGroupModel_Mock.watchgroup_title);
        expect(savedUser.firstName).toBe(watchGroupModel_Mock.firstName);
        expect(savedUser.lastName).toBe(watchGroupModel_Mock.lastName);
        expect(savedUser.email).toBe(watchGroupModel_Mock.email);
        expect(savedUser.total_points).toBe(watchGroupModel_Mock.total_points);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new watchGroupModel(watchGroupModel_Mock2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField.author).toBeDefined();
        expect(savedUserWithInvalidField.dummy_field).toBeUndefined();
    });
})
