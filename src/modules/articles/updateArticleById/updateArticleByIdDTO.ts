export interface IUpdateArticleByIdDTO {
  id?: string;
  title?: string;
  launches?: [];
  events?: [];
  featured?: boolean;
  summary?: string;
  url?: string;
  imageUrl?: string;
  newsSite?: string;
}
