import { Launch } from "./Launch";
import { Event } from "./Event";
export class Article {
  public id: string;
  public featured?: boolean | null;
  public summary?: string | null;
  public title: string;
  public url: string;
  public imageUrl: string;
  public newsSite: string;
  public publishedAt: string;
  public launches: Launch[];
  public events: Event[];
  constructor(props: Article) {
    Object.assign(this, props);
  }
}
