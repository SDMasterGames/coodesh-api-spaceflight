import { Router } from "express";

export interface IControllerProps {
  path: string;
  router: Router;
  initializeRoutes(): void;
  getRoutesAllFiles?(): void;
}
