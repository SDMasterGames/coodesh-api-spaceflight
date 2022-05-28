import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";


//Documentation route
export class Controller implements Controller.IControllerProps<Router> {
  public path = "/docs";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use(this.path, swaggerUi.serve);
    this.router.get(this.path, swaggerUi.setup(swaggerDocument));
  }
}
