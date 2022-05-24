import { randomUUID } from "crypto";

import { ArticleTestRepository } from "../../__tests__/ArticleTestRepository";

import { createArticleUseCase } from "./createArticle/createArticleUseCase";
import { getArticleByIdUseCase } from "./getArticleById/getArticleByIdUseCase";
import { getAllArticlesUseCase } from "./getAllArticles/getAllArticlesUseCase";
import { deleteArticleByIdUseCase } from "./deleteArticleById/deleteArticleByIdUseCase";
import { updateArticleByIdUseCase } from "./updateArticleById/updateArticleByIdUseCase";
import { Article } from "../../entities/Article";

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
      await expect(GetArticleById.execute("13246545")).rejects.toThrow(
        "Article is not exist"
      );
    });

    it("should id is required", async () => {
      await expect(GetArticleById.execute("")).rejects.toThrow(
        "Id is required"
      );
    });
  });

  describe("Get All Articles", () => {
    it("should get all articles", async () => {
      await expect(GetAllArticlesUseCase.execute({})).resolves.toHaveLength(1);
    });

    it("should fail if the limit is invalid", async () => {
      await expect(
        GetAllArticlesUseCase.execute({
          limit: "a",
        })
      ).rejects.toThrow();
    });

    it("should fail if the page is invalid", async () => {
      await expect(
        GetAllArticlesUseCase.execute({
          page: "a",
        })
      ).rejects.toThrow();
    });
  });

  describe("Update Article By Id", () => {
    it("should update an article", async () => {
      await expect(
        UpdateArticleById.execute({
          id: articleTest.id,
          title: "new title",
        })
      ).resolves.toHaveProperty("title", "new title");
    });

    it("should not find the article", async () => {
      await expect(
        UpdateArticleById.execute({
          id: "123456789",
          title: "new title",
        })
      ).rejects.toThrow("Article not found");
    });

    it("should id is required", async () => {
      await expect(
        UpdateArticleById.execute({
          id: "",
          title: "new title",
        })
      ).rejects.toThrow("Id is required");
    });
  });

  describe("Delete Article By Id", () => {
    it("should delete an article", async () => {
      await expect(
        DeleteArticleById.execute(articleTest.id)
      ).resolves.not.toThrow();
    });

    it("should not find the article", async () => {
      await expect(DeleteArticleById.execute("123154")).rejects.toThrow();
    });
  });
});
