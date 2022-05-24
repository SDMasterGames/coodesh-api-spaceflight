import { Router } from "express";
export class Controller implements Controller.IControllerProps<Router> {
  public path = "/";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, (req, res) => {
      return res.status(200).send({
        msg: "v1",
      });
    });
  }
}
