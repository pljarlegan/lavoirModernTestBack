const expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("http://localhost:3000");


describe("POST localhost:3000/test2", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test2")
      .set("Accept", "application/json")
      .send({ list1: [ "a", "b", "c" ], list2: [ 1, 2, 3 ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal([ "a", 1, "b", 2, "c", 3 ]);
        expect(200, done);
        done();
      });
  });
});
