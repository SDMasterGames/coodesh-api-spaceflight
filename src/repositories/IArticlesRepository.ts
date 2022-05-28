import { Article } from "../entities/Article";
import { Event } from "../entities/Event";
import { Launch } from "../entities/Launch";

export interface ICreateArticleData {
  featured?: boolean | null;
  summary?: string | null;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  launches: Launch[];
  events: Event[];
}

export interface IfindByIdAndUpdateData extends Omit<Article, "id"> {}

export interface IGetAllArticlesData {
  limit: number;
  page: number;
}

export interface IArticlesRepository {
  //getAll(): Promise<any>;
  createArticle(data: ICreateArticleData): Promise<Article>;
  findArticleById(id: string): Promise<Article | null>;
  getAllArticles(data: IGetAllArticlesData): Promise<Article[]>;
  deleteById(id: string): Promise<Article | null>;
  findByIdAndUpdate(id: string, data: IfindByIdAndUpdateData): Promise<Article>;
}
