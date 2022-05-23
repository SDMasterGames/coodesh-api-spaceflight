import { ArticlePrisma } from "../../../repositories/implements/ArticlePrisma";
import { deleteArticleByIdController } from "./deleteArticleByIdController";
import { deleteArticleByIdUseCase } from "./deleteArticleByIdUseCase";

const ArticleRepository = new ArticlePrisma();

const DeleteArticleByIdUseCase = new deleteArticleByIdUseCase(
  ArticleRepository
);

const DeleteArticleByIdController = new deleteArticleByIdController(
  DeleteArticleByIdUseCase
);

export { DeleteArticleByIdController, DeleteArticleByIdUseCase };
