import { Article } from "@prisma/client";
import { prisma } from "../../database/prisma";
import {
  IArticlesRepository,
  ICreateArticleData,
  IfindByIdAndUpdateData,
  IGetAllArticlesData,
} from "../IArticlesRepository";

export class ArticlePrisma implements IArticlesRepository {
  async createArticle(article: ICreateArticleData): Promise<Article> {
    const prismaArticle = await prisma.article.create({
      data: article,
    });
    return prismaArticle;
  }

  async findArticleById(id: string): Promise<Article | null> {
    try {
      const article = await prisma.article.findUnique({
        where: { id },
      });
      return article;
    } catch (error: any) {
      if (error.code == "P2023") throw new Error(`id invalid`);
      throw new Error();
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
  async deleteById(id: string): Promise<Article | null> {
    try {
      const article = await prisma.article.delete({
        where: { id },
      });
      return article;
    } catch (error: any) {
      if (error.code == "P2025") return null;
      if (error.code == "P2023") throw new Error(`id invalid`);
      throw new Error();
    }
  }

  async findByIdAndUpdate(
    id: string,
    data: IfindByIdAndUpdateData
  ): Promise<Article> {
    const article = await prisma.article.update({
      where: { id },
      data: {
        ...data,
      },
    });
    return article;
  }
}
