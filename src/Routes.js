import { Router } from "express";
import VerifyToken from "./middlewares/verifyToken";

const routes = Router();

routes.get("/status", (req, res) => {
  return res.json({ servidor: "Servidor ativo!" });
});

// All of the following routes passed the 'VerifyToken' function before the source function
routes.use(VerifyToken);

export default routes;
