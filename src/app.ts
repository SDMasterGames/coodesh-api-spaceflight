import express from "express";

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
  private routes(): void {}

  
  public listen(PORT:number | string): void {
    this.express.listen(PORT);
  }
}