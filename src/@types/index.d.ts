declare namespace App {
  export interface IAppProps<T> {
    server: T;
    middleware(): void;
    routes(): void;
    listen(PORT: number | string, hostname?: string): void;
  }
}

declare namespace Controller {
  export interface IControllerProps<T> {
    path: string;
    router: T;
    initializeRoutes(): void;
  }
}
