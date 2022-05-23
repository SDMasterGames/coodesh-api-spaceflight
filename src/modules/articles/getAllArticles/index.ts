import { ArticlePrisma } from "../../../repositories/implements/ArticlePrisma";
import { getAllArticlesUseCase } from "./getAllArticlesUseCase";
import { getAllArticlesController } from "./getAllArticlesController";
const ArticleRepository = new ArticlePrisma();

const GetAllArticlesUseCase = new getAllArticlesUseCase(ArticleRepository);
const GetAllArticlesController = new getAllArticlesController(
  GetAllArticlesUseCase
);
export { GetAllArticlesUseCase, GetAllArticlesController };
