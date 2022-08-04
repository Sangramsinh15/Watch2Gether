const mongoose = require('mongoose');
const dbHandler = require('../db-handler');
const ContentPage = require("../../models/contentPageModel/index.js");
const userData = { movie_show_id: '675578', watchGroupList: [
    {
        watchgroup_id: '432', 
        email: 'sangram', 
        creation_date: "sangram", 
        watchgroup_title: 'sangram'},]};



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

 

describe('Content Page Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect

    it('create & save user successfully', async () => {
        const validUser = new ContentPage(userData);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser.movie_show_id).toBe(userData.movie_show_id);
        expect(savedUser.watchgroup_id).toBe(userData.watchgroup_id);
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.creation_date).toBe(userData.creation_date);
        expect(savedUser.watchgroup_title).toBe(userData.watchgroup_title);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new ContentPage( { movie_show_id: '86879', watchGroupList: [
            {watchgroup_id: 432, email: 'Male', creation_date: 'Facebook', watchgroup_title: 'vkdsj'},]});
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField.movie_show_id).toBeDefined();
        expect(savedUserWithInvalidField.likes).toBeUndefined();
    });

    //Testing for Movie Id never to be null
    it('Checking Movie Id for it not to be null', async () => {
        const movie_show_idMock = new ContentPage({movie_show_id:'1234567'});
        const movie_show_idMock_Saved = await movie_show_idMock.save();
        expect(movie_show_idMock_Saved.movie_show_id).not.toBeNull();
    });
    
})
