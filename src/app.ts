import express, { Application, Router } from "express";
import path from "path";
import { getAllRoutesByFolders } from "./lib/getAllRoutesByFolders";
export class App implements App.IAppProps<Application> {
  public server: Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  public middleware(): void {
    this.server.use(express.json());
  }
  public routes(): void {
    const { routes } = new getAllRoutesByFolders<Router>(
      path.join(__dirname, "routes")
    );
    routes.forEach((route) => {
      this.server.use(route.path, route.router);
    });
  }

  public listen(PORT: number | string): void {
    this.server.listen(PORT, () =>
      console.log(`\nServer is running on port ${PORT}`)
    );
  }
}
