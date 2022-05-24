import fs from "fs";
import path from "path";
function ControllerValidate<T>(
  target: any,
  items: string
): Controller.IControllerProps<T> | null {
  if (!target || typeof target !== "function") {
    console.log(`Controller not found in ${items}`);
    return null;
  }

  const controller = new target();

  if (
    controller.router === undefined ||
    typeof controller.router !== "function"
  ) {
    console.log(`no route found in ${items}`);
    return null;
  }

  if (controller.path === undefined) {
    console.log(`no path found in ${items}`);
    return null;
  }

  return controller;
}
export class getAllRoutesByFolders<T> {
  public routes: Pick<Controller.IControllerProps<T>, "path" | "router">[] = [];
  constructor(dirname: string) {
    this.getAllRoutes(dirname);
  }
  private getAllRoutes(dirname: string, folder: string = "") {
    fs.readdirSync(dirname + folder).forEach((items) => {
      if (items.search(/\.ts|js/gi) > -1) {
        const route = require(path.join(dirname, folder, items));
        const Controller = ControllerValidate<T>(
          route.Controller,
          `${folder}/${items}`
        );
        if (!Controller) return;

        const fullPath = `${folder}${Controller.path}`;
        console.log(`Routes - ${fullPath}`);
        this.routes.push({
          path: folder,
          router: Controller.router,
        });
        return;
      } else {
        //console.log(`Folder - ${folder}/${items}`);
        this.getAllRoutes(dirname, `${folder}/${items}`);
      }
    });
  }
}
