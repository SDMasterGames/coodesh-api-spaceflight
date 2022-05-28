import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { IUpdateArticleByIdDTO } from "./updateArticleByIdDTO";

export class updateArticleByIdUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute(data: IUpdateArticleByIdDTO) {
    if (!data.id) {
      throw new Error("Id is required");
    }

    const ArticleIsExist = await this.IArticlesRepository.findArticleById(
      data.id
    );

    if (!ArticleIsExist) {
      throw new Error("Article not found");
    }

    if (data.title) {
      ArticleIsExist.title = data.title;
    }
    const { id, ...update } = ArticleIsExist;
    const updatedArticle = await this.IArticlesRepository.findByIdAndUpdate(
      id,
      update
    );

    return updatedArticle;
  }
}
