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
    this.router.get(this.path, async (req, res) => {
      const { body, code } = await GetAllArticlesController.handle({
        query: req.query,
      });
      return res.status(code).json(body);
    });
    this.router.get(`${this.path}/:id`, async (req, res) => {
      const { body, code } = await GetArticleByIdController.handle({
        params: req.params,
      });
      return res.status(code).json(body);
    });

    this.router.post(this.path, async (req, res) => {
      const { body, code } = await CreateArticleController.handle({
        body: req.body,
      });
      return res.status(code).json(body);
    });

    this.router.put(`${this.path}/:id`, async (req, res) => {
      const { body, code } = await UpdateArticleByIdController.handle({
        params: req.params,
        body: req.body,
      });
      return res.status(code).json(body);
    });

    this.router.delete(`${this.path}/:id`, async (req, res) => {
      const { body, code } = await DeleteArticleByIdController.handle({
        params: req.params,
      });
      return res.status(code).json(body);
    });
  }
}
