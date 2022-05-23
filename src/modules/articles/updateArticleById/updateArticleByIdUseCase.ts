import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { IUpdateArticleByIdDTO } from "./updateArticleByIdDTO";

export class updateArticleByIdUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute({ id, title }: IUpdateArticleByIdDTO) {
    if (!id) {
      throw new Error("Id is required");
    }

    const ArticleIsExist = await this.IArticlesRepository.findArticleById(id);

    if (!ArticleIsExist) {
      throw new Error("Article not found");
    }

    if (title) {
      ArticleIsExist.title = title;
    }

    const updatedArticle = await this.IArticlesRepository.findByIdAndUpdate(
      id,
      ArticleIsExist
    );
    
    return updatedArticle;
  }
}
