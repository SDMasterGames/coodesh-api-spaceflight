import { Application } from "express";
import fs from "fs";
import path from "path";

export default (app: Application) => {
  fs
  .readdirSync(__dirname)
  .filter((files) => !files.startsWith("index"))
  .forEach(file => {
    const router = require(path.join(__dirname, file)).default;
    router(app);
  })
};
