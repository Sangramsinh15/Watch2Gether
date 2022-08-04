const dbHandler = require("../db-handler");
const existingPostModel = require("../../models/existingPostModel/index");
const existingPostSchema_mock = {
  creation_date: "22/4/2022",
  movie_show_id: "123456",
  watchgroup_id: "098765",
  poster_url: "https://fxgh@skmx.com",
  userid: "2345678",
  post_descr: "hos ioji",
  post_comments: [
    {
      commentid: "1234",
      parentcommentid: "345",
      postid: "56",
      comment_text: "xyz",
      user: {
        firstName: "abc",
        lastName: "def",
        email: "abc@hui.com",
      },
    },
  ],
  total_points: 657,
  post_title: "asdfgh",
};

const existingPostSchema_mock2 = {
  creation_date: "22/4/2022",
  movie_show_id: "123456",
  watchgroup_id: "098765",
  poster_url: "https://fxgh@skmx.com",
  userid: "2345678",
  post_descr: "hos ioji",
  post_comments: [
    {
      commentid: "1234",
      parentcommentid: "345",
      postid: "56",
      comment_text: "xyz",
      user: {
        firstName: "abc",
        lastName: "def",
        email: "abc@hui.com",
      },
    },
  ],
  total_points: 657,
  post_title: "asdfgh",
  invalid_field: "sxvjxs",
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

describe("User Model Test", () => {
  // It's just so easy to connect to the MongoDB Memory Server
  // By using mongoose.connect

  it("create & save user successfully", async () => {
    const validUser = new existingPostModel(existingPostSchema_mock);
    const savedUser = await validUser.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser.creation_date).toBe(existingPostSchema_mock.creation_date);
    expect(savedUser.movie_show_id).toBe(existingPostSchema_mock.movie_show_id);
    expect(savedUser.watchgroup_id).toBe(existingPostSchema_mock.watchgroup_id);
    expect(savedUser.poster_url).toBe(existingPostSchema_mock.poster_url);
    expect(savedUser.userid).toBe(existingPostSchema_mock.userid);
    expect(savedUser.post_descr).toBe(existingPostSchema_mock.post_descr);
    expect(savedUser.commentid).toBe(existingPostSchema_mock.commentid);
    expect(savedUser.parentcommentid).toBe(
      existingPostSchema_mock.parentcommentid
    );
    expect(savedUser.postid).toBe(existingPostSchema_mock.postid);
    expect(savedUser.comment_text).toBe(existingPostSchema_mock.comment_text);
    expect(savedUser.firstName).toBe(existingPostSchema_mock.firstName);
    expect(savedUser.lastName).toBe(existingPostSchema_mock.lastName);
    expect(savedUser.email).toBe(existingPostSchema_mock.email);
    expect(savedUser.total_points).toBe(existingPostSchema_mock.total_points);
    expect(savedUser.post_title).toBe(existingPostSchema_mock.post_title);
  });

  // Test Schema is working!!!
  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field does not defined in schema should be undefined", async () => {
    const userWithInvalidField = new existingPostModel(
      existingPostSchema_mock2
    );
    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField.creation_date).toBeDefined();
    expect(savedUserWithInvalidField.movie_show_id).toBeDefined();
    expect(savedUserWithInvalidField.watchgroup_id).toBeDefined();
    expect(savedUserWithInvalidField.poster_url).toBeDefined();
    expect(savedUserWithInvalidField.invalid_field).toBeUndefined();
  });
});
