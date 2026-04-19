import express from "express";

export function createApp() {
  const app = express();

  // middlewares

  // routes
  app.get("/health", (req, res) => {
    res.json({
      ok: true,
    });
  });

  return app;
}
