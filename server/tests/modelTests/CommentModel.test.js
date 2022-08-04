const dbHandler = require('../db-handler');
const Comment = require("../../models/commentModel/index.js");
const userData = { 
    comment_id: '432', 
    comment_text: 'sangram', 
    author_name: "sangram", 
    author_email: 'sangram', 
    parent_comment_id: '765', 
    created_at: '678' };

    
jest.setTimeout(3000000);
/**
 * Connect to a new in-memory database before running any tests.
 */
 beforeAll(async () => await dbHandler.connect());

 /**
  * Clear all test data after every test.
  */
 afterEach(async () => await dbHandler.clearDatabase());
 
 /**
  * Remove and close the db and server.
  */
 afterAll(async () => await dbHandler.closeDatabase());
 

describe("User Model Test", () => {
  // It's just so easy to connect to the MongoDB Memory Server
  // By using mongoose.connect

  it("create & save user successfully", async () => {
    const validUser = new Comment(userData);
    const savedUser = await validUser.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser.comment_id).toBe(userData.comment_id);
    expect(savedUser.comment_text).toBe(userData.comment_text);
    expect(savedUser.author_name).toBe(userData.author_name);
    expect(savedUser.author_email).toBe(userData.author_email);
    expect(savedUser.parent_comment_id).toBe(userData.parent_comment_id);
    expect(savedUser.created_at).toBe(userData.created_at);
  });

  // Test Schema is working!!!
  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field does not defined in schema should be undefined", async () => {
    const userWithInvalidField = new Comment({
      comment_id: 432,
      comment_text: "Male",
      author_name: "lijd",
      author_email: "Facebook",
      parent_comment_id: 765,
      created_at: 678,
      likes: 1,
    });
    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField.comment_id).toBeDefined();
    expect(savedUserWithInvalidField.likes).toBeUndefined();
  });
})