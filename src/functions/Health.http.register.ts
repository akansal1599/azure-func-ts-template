import { app } from "@azure/functions";
import { Health } from "./Health.handler.js";

app.http("Health", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: Health,
});
