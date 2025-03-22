import request from "supertest";
import app from "../app";

describe("Commit API Endpoints", () => {
  it("should return commit metadata", async () => {
    const response = await request(app).get(
      "/api/v1/repositories/golemfactory/clay/commits/a1bf367b3af680b1182cc52bb77ba095764a11f9"
    );
    expect(response.status).toBe(200);
  });

  it("should return commit diff", async () => {
    const response = await request(app).get(
      "/api/v1/repositories/golemfactory/clay/commits/a1bf367b3af680b1182cc52bb77ba095764a11f9/diff"
    );
    expect(response.status).toBe(200);
  });
});
