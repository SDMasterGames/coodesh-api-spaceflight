import { Article } from "../../entities/Article";
import { Event } from "../../entities/Event";
import { Launch } from "../../entities/Launch";

import { prisma } from "../../database/prisma";
import {
  IArticlesRepository,
  ICreateArticleData,
  IfindByIdAndUpdateData,
  IGetAllArticlesData,
} from "../IArticlesRepository";
import { IdInvalidError, NotFoundError, UnexpectedError } from "../errors";

export class ArticlePrisma implements IArticlesRepository {
  async createArticle(article: ICreateArticleData): Promise<Article> {
    const prismaArticle = await prisma.article.create({
      data: article,
    });
    return prismaArticle;
  }

  async findArticleById(id: string): Promise<Article | null | ControllerError> {
    try {
      const article = await prisma.article.findUnique({
        where: { id },
      });
      return article ? new Article(article) : null;
    } catch (error: any) {
      if (error.code == "P2023") return new IdInvalidError();
      return new UnexpectedError(error.message);
    }
  }

  async getAllArticles({
    limit,
    page,
  }: IGetAllArticlesData): Promise<Article[]> {
    return await prisma.article.findMany({
      take: limit,
      skip: page == 1 ? 0 : (page - 1) * limit,
    });
  }
  async deleteById(id: string): Promise<Article | null | ControllerError> {
    try {
      const article = await prisma.article.delete({
        where: { id },
      });
      return new Article(article);
    } catch (error: any) {
      if (error.code == "P2025") return null;
      if (error.code == "P2023") return new IdInvalidError();
      return new UnexpectedError(error.message);
    }
  }

  async findByIdAndUpdate(
    id: string,
    data: IfindByIdAndUpdateData
  ): Promise<Article | ControllerError> {
    try {
      const article = await prisma.article.update({
        where: { id },
        data,
      });
      return new Article(article);
    } catch (error: any) {
      return new UnexpectedError(error.message);
    }
  }
}
