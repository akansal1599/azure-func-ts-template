import type { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function Health(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    jsonBody: {
      status: "ok",
      message: "Function App is alive",
    },
  };
}
