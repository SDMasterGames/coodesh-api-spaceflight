import { IArticlesRepository } from "../../../repositories/IArticlesRepository";

export class deleteArticleByIdUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute(id?: string) {
    if (!id) {
      throw new Error("Id is required");
    }
    const deletedArticle = await this.IArticlesRepository.deleteById(id);

    if(!deletedArticle){
        throw new Error("Article not found");
    }

    return deletedArticle;
  }
}
