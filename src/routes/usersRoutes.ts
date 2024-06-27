import { Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
  res.sendStatus(200);
});

export default usersRoutes;
