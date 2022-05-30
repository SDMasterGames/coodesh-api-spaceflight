import { randomUUID } from "crypto";

import { ArticleTestRepository } from "../../__tests__/ArticleTestRepository";

import { createArticleUseCase } from "./createArticle/createArticleUseCase";
import { getArticleByIdUseCase } from "./getArticleById/getArticleByIdUseCase";
import { getAllArticlesUseCase } from "./getAllArticles/getAllArticlesUseCase";
import { deleteArticleByIdUseCase } from "./deleteArticleById/deleteArticleByIdUseCase";
import { updateArticleByIdUseCase } from "./updateArticleById/updateArticleByIdUseCase";
import { Article } from "../../entities/Article";
import { InvalidParamsError } from "../adapters/errors";

const articleTestRepository = new ArticleTestRepository();

const CreateArticle = new createArticleUseCase(articleTestRepository);
const GetArticleById = new getArticleByIdUseCase(articleTestRepository);
const GetAllArticlesUseCase = new getAllArticlesUseCase(articleTestRepository);
const UpdateArticleById = new updateArticleByIdUseCase(articleTestRepository);
const DeleteArticleById = new deleteArticleByIdUseCase(articleTestRepository);

const articleTest = new Article({
  id: randomUUID(),
  title: "Starliner launches to remain on Atlas 5",
  url: "https://spacenews.com/starliner-launches-to-remain-on-atlas-5/",
  imageUrl:
    "https://spacenews.com/wp-content/uploads/2022/05/oft2-launch-pad.jpg",
  newsSite: "SpaceNews",
  summary: "",
  publishedAt: "2022-05-22T23:27:04.000Z",
  featured: false,
  launches: [],
  events: [],
});

describe("Module - Articles", () => {
  describe("Create Articles", () => {
    it("should create an article", async () => {
      await expect(CreateArticle.execute(articleTest)).resolves.not.toThrow();
    });
  });

  describe("Get Article By Id", () => {
    it("should get an article", async () => {
      await expect(
        GetArticleById.execute(articleTest.id)
      ).resolves.not.toThrow();
    });

    it("should not find the article", async () => {
      await expect(GetArticleById.execute("13246545")).resolves.toHaveProperty(
        "code",
        400
      );
    });

    it("should id is required", async () => {
      await expect(GetArticleById.execute("")).resolves.toHaveProperty(
        "code",
        400
      );
    });
  });

  describe("Get All Articles", () => {
    it("should get all articles", async () => {
      const { body } = await GetAllArticlesUseCase.execute({});
      expect(body).toHaveLength(1);
    });

    it("should fail if the limit is invalid", async () => {
      const { body, code } = await GetAllArticlesUseCase.execute({
        limit: "a",
      });

      expect(code).toBe(400);
      expect(body).toBe(
        new InvalidParamsError("limit and page must be integer").message
      );
    });

    it("should fail if the page is invalid", async () => {
      const { body, code } = await GetAllArticlesUseCase.execute({
        page: "a",
      });

      expect(code).toBe(400);
      expect(body).toBe(
        new InvalidParamsError("limit and page must be integer").message
      );
    });
  });

  describe("Update Article By Id", () => {
    it("should update an article", async () => {
      const { body, code } = await UpdateArticleById.execute({
        id: articleTest.id,
        title: "new title",
      });
      expect(code).toBe(200);
      expect(body).toHaveProperty("title", "new title");
    });

    it("should not find the article", async () => {
      const { body, code } = await UpdateArticleById.execute({
        id: "123456789",
        title: "new title",
      });
      expect(code).toBe(400);
      expect(body).toBe("Article not found");
    });

    it("should id is required", async () => {
      const { body, code } = await UpdateArticleById.execute({
        id: "",
        title: "new title",
      });
      expect(code).toBe(400);
      expect(body).toBe("Id is required");
    });
  });

  describe("Delete Article By Id", () => {
    it("should delete an article", async () => {
      const { body, code } = await DeleteArticleById.execute(articleTest.id);

      expect(code).toBe(200);
      expect(body).toHaveProperty("id", articleTest.id);
    });

    it("should id is required", async () => {
      const { body, code } = await DeleteArticleById.execute("");
      expect(code).toBe(400);
      expect(body).toBe("Id is required");
    });

    it("should not find the article", async () => {
      const { body, code } = await DeleteArticleById.execute("123154");
      expect(code).toBe(400);
      expect(body).toBe("Article not found");
    });
    it("should have successfully deleted", async () => {
      const { body, code } = await GetArticleById.execute(articleTest.id);
      expect(code).toBe(400);
      expect(body).toBe("Article is not exist");
    });
  });
});
