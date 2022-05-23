import { ArticlePrisma } from "../../../repositories/implements/ArticlePrisma";
import { getArticleByIdController } from "./getArticleByIdController";
import { getArticleByIdUseCase } from "./getArticleByIdUseCase";

const ArticleRepository = new ArticlePrisma();

const GetArticleByIdUseCase = new getArticleByIdUseCase(ArticleRepository);

const GetArticleByIdController = new getArticleByIdController(
  GetArticleByIdUseCase
);

export { GetArticleByIdUseCase, GetArticleByIdController };
