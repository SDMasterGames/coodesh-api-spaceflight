import { Article, Event, Launch } from "@prisma/client";

export interface ICreateArticleData {
  featured?: boolean;
  summary?: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  launches: Launch[];
  events: Event[];
}

export interface IfindByIdAndUpdateData {
  title: string;
}

export interface IArticlesRepository {
  //getAll(): Promise<any>;
  createArticle(data: ICreateArticleData): Promise<Article>;
  findArticleById(id: string): Promise<Article | null>;
  getAllArticles(): Promise<Article[]>;
  deleteById(id: string): Promise<Article | null>;
  findByIdAndUpdate(
    id: string,
    data: IfindByIdAndUpdateData
  ): Promise<Article>;
}
