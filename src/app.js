import express from "express";
import ownerRoutes from "./module/ipl_management/routes/owner.route.js";

export function createApp() {
  const app = express();

  // middlewares
  app.use(express.json());

  // routes
  app.get("/health", (req, res) => {
    res.json({
      ok: true,
    });
  });

  app.use("/api/owners", ownerRoutes);
  return app;
}
