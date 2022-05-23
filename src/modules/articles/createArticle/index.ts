import { ArticlePrisma } from "../../../repositories/implements/ArticlePrisma";
import { createArticleController } from "./createArticleController";
import { createArticleUseCase } from "./createArticleUseCase";


const ArticleRepository = new ArticlePrisma();

const CreateArticleUseCase = new createArticleUseCase(ArticleRepository);

const CreateArticleController = new createArticleController(
  CreateArticleUseCase
);

export { CreateArticleController, CreateArticleUseCase };
