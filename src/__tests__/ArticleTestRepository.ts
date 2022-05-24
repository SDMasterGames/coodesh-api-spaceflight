import { Article } from "../entities/Article";
import {
  IArticlesRepository,
  ICreateArticleData,
  IfindByIdAndUpdateData,
  IGetAllArticlesData,
} from "../repositories/IArticlesRepository";

const ArticleRepo: Article[] = [];

interface ICreateArticleDataMock extends ICreateArticleData {
  id: string;
}

export class ArticleTestRepository implements IArticlesRepository {
  async createArticle(data: ICreateArticleDataMock): Promise<Article> {
    return new Promise((resolve, reject) => {
      const articleNew = {
        ...data,
        featured: data.featured || false,
        summary: data.summary || "",
      };
      ArticleRepo.push(articleNew);

      resolve(articleNew);
    });
  }

  async findArticleById(id: string): Promise<Article | null> {
    return new Promise((resolve, reject) => {
      const article = ArticleRepo.find((article) => article.id === id);
      resolve(article || null);
    });
  }
  async getAllArticles(data: IGetAllArticlesData): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      resolve(ArticleRepo);
    });
  }

  async deleteById(id: string): Promise<Article | null> {
    return new Promise((resolve, reject) => {
      const article = ArticleRepo.find((article) => article.id === id);
      if (article) {
        ArticleRepo.splice(ArticleRepo.indexOf(article), 1);
      }
      resolve(article || null);
    });
  }

  async findByIdAndUpdate(
    id: string,
    data: IfindByIdAndUpdateData
  ): Promise<Article> {
    return new Promise((resolve, reject) => {
      const article = ArticleRepo.find((article) => article.id === id);
      if (article) {
        const result = { ...article, ...data };
        resolve(result);
      }
    });
  }
}
