import { IArticlesRepository } from "../../../repositories/IArticlesRepository";

export class getArticleByIdUseCase {
  constructor(private IArticleRepository: IArticlesRepository) {}

  async execute(id?: string) {
    if (!id) {
      throw new Error("Id is required");
    }

    const ArticleIsExist = await this.IArticleRepository.findArticleById(id);
    if (!ArticleIsExist) {
      throw new Error("Article is not exist");
    }
    return ArticleIsExist;
  }
}
