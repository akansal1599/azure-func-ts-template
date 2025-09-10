import type { HttpRequest, InvocationContext } from "@azure/functions";
import { Health } from "../../src/functions/Health.handler";

describe("Health function", () => {
  it("should return 200 with status ok", async () => {
    const request = { url: "http://localhost/api/Health" } as HttpRequest;
    const context = { log: jest.fn() } as unknown as InvocationContext;

    const result = await Health(request, context);

    expect(result.status).toBe(200);
    expect(result.jsonBody).toEqual({ status: "ok", message: "Function App is alive" });
  });
});
