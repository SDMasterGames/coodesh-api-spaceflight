import { ArticlePrisma } from "../../../repositories/implements/ArticlePrisma";
import { updateArticleByIdController } from "./updateArticleByIdController";
import { updateArticleByIdUseCase } from "./updateArticleByIdUseCase";

const ArticleRepository = new ArticlePrisma();

const UpdateArticleByIdUseCase = new updateArticleByIdUseCase(
  ArticleRepository
);

const UpdateArticleByIdController = new updateArticleByIdController(
  UpdateArticleByIdUseCase
);

export { UpdateArticleByIdController, UpdateArticleByIdUseCase };
