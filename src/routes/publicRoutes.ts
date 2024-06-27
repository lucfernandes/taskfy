import { Router } from "express";

const publicRouter = Router();

publicRouter.get("/", (req, res) => {
  res.send("200");
});

export default publicRouter;
