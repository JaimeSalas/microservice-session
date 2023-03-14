import express from "express";

export const exampleRoute = () => {
  const router = express.Router();

  router.get("/resource", (_, res) => {
    res.status(200).json({ ok: true });
  });

  return router;
};
