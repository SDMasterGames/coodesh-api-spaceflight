import { Router } from "express";
import { CreateArticleController } from "../../modules/articles/createArticle/";
import { DeleteArticleByIdController } from "../../modules/articles/deleteArticleById";
import { GetAllArticlesController } from "../../modules/articles/getAllArticles";
import { GetArticleByIdController } from "../../modules/articles/getArticleById";
import { UpdateArticleByIdController } from "../../modules/articles/updateArticleById";

export class Controller implements Controller.IControllerProps<Router> {
  public path = "/articles";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, (req, res) => {
      GetAllArticlesController.handle(req, res);
    });
    this.router.get(`${this.path}/:id`, (req, res) => {
      GetArticleByIdController.handle(req, res);
    });

    this.router.post(this.path, (req, res) =>
      CreateArticleController.handle(req, res)
    );

    this.router.put(this.path, (req, res) =>
      UpdateArticleByIdController.handle(req, res)
    );

    this.router.delete(`${this.path}/:id`, (req, res) =>
      DeleteArticleByIdController.handle(req, res)
    );
  }
}
