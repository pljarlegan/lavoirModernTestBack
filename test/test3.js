const expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("http://localhost:3000");


describe("POST localhost:3000/test2", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test3")
      .set("Accept", "application/json")
      .send({ matrix: [ [ 6, 3, 2, 1 ], [ 5, 5, 4, 1 ], [ 1, 2, 2, 3 ] ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal(25);
        expect(200, done);
        done();
      });
  });
});
