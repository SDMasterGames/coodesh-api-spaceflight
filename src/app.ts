import express from "express";
import Routes from "./routes/";
export class App {
  private express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }
  private routes(): void {
    Routes(this.express);
  }

  public listen(PORT: number | string): void {
    this.express.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`)
    );
  }
}
