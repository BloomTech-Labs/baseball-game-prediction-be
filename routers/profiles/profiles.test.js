const request = require("supertest");
const server = require("../../api/server");

test("Should create a new user profile", async () => {
  await request(server)
    .post("/api/profiles/create")
    .send({
      email: "testEmail@test.com",
      password: "myPassword123"
    })
    .expect(200);
});
