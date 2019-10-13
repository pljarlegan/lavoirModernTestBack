const expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("http://localhost:3000");



describe("GET localhost:3000/test1/for", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test1/for")
      .set("Accept", "application/json")
      .send({ list: [ 1, 2, 3 ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal({ result: 6 });
        expect(200, done);
        done();
      });
  });
});
describe("GET localhost:3000/test1/foreach", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test1/foreach")
      .set("Accept", "application/json")
      .send({ list: [ 1, 2, 3 ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal({ result: 6 });
        expect(200, done);
        done();
      });
  });
});
describe("GET localhost:3000/test1/while", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test1/while")
      .set("Accept", "application/json")
      .send({ list: [ 1, 2, 3 ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal({ result: 6 });
        expect(200, done);
        done();
      });
  });
});
describe("GET localhost:3000/test1/recursion", () => {
  "use strict";
  it("should return a 200 response, with empty collection", (done) => {
    api.post("/test1/recursion")
      .set("Accept", "application/json")
      .send({ list: [ 1, 2, 3 ] })
      .end((error, response) => {
        expect(response.body).to.deep.equal({ result: 6 });
        expect(200, done);
        done();
      });
  });
});
