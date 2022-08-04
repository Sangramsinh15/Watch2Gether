const dbHandler = require('../db-handler');
const postModel = require("../../models/postModel/index.js");
const postModel_Mock = {
    post_title: 'GYYKNK',
    description: 'dfghj',
    creation_date: 21/2/2002,
    uploaded_image: 'AZsxdcfvgbhnjmksdfghjk',
    userid: '098765',
    movie_show_id: '123456',
    watchgroup_id: '3245678',
    postid: '1234567',
  };
  const postModel_Mock2 = {
    post_title: 'GYYKNK',
    description: 'dfghj',
    creation_date: 21/2/2002,
    uploaded_image: 'AZsxdcfvgbhnjmksdfghjk',
    userid: '098765',
    movie_show_id: '123456',
    watchgroup_id: '3245678',
    postid: '1234567',
    dummy_field: '234'
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
        const validUser = new postModel(postModel_Mock);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser.post_title).toBe(postModel_Mock.post_title);
        expect(savedUser.description).toBe(postModel_Mock.description);
        expect(savedUser.uploaded_image).toBe(postModel_Mock.uploaded_image);
        expect(savedUser.userid).toBe(postModel_Mock.userid);
        expect(savedUser.movie_show_id).toBe(postModel_Mock.movie_show_id);
        expect(savedUser.watchgroup_id).toBe(postModel_Mock.watchgroup_id);
        expect(savedUser.postid).toBe(postModel_Mock.postid);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new postModel(postModel_Mock2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField.post_title).toBeDefined();
        expect(savedUserWithInvalidField.description).toBeDefined();
        expect(savedUserWithInvalidField.dummy_field).toBeUndefined();
    });
    
})
