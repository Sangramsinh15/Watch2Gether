const index = require("../routers/postRouter");
const request = require("supertest");
const express = require("express");
//const src = require("../src/index");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);
jest.setTimeout(3000000);
test("Post route works", done => {
     request(app)
      .post("/createPost")
      .type("form")
      .send({ title: "hey", description: "Hello"})
      .then(() => {
        request(app)
          .get("/createPost")
          .expect({ }, done);
      });
  });
  
  
  test("testing route works", done => {
    request(app)
      .post("/post")
      .type("form")
      .send({ discussion_thread_id: "4" })
      .then(() => {
        request(app)
          .get("/post")
          .expect({  }, done);
      });
  });
  let elementId;
  describe("Test example", () => {
    test("POST /send", (done) => {
      request(app)
        .post("/createPost")
        .expect("Content-Type", /json/)
        .send({
            title: "francisco@example.com",
            description: "Hello"
          })
          .expect((res) => {
            res.body.success = true;
          })
          .end((err, res) => {
            if (err) return done(err);
            elementId = res.body.success;
            return done();
          });
        // More logic goes here
    });
    // More things come here
  });

   
//   it("invest ", () => {
//     return request(app)
//       .post("/pt/createPost")
//       .send({
//         title: expect.any(String),
//         description: expect.any(String),
//       })
//       .set('Accept', 'application/json')
//       .expect("Content-Type", "text/html; charset=utf-8")
//       .then((response) => {
//         expect(response.body).toEqual(
//           expect.objectContaining({
            
//           })
//         );
//       });
//   });