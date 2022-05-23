import { IArticlesRepository } from "../../../repositories/IArticlesRepository";

export class getAllArticlesUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute() {
    const allArticles = await this.IArticlesRepository.getAllArticles();
    return allArticles || [];
  }
}
