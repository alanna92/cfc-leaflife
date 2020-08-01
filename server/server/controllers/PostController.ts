import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../entity/Post";

export class PostController {
  async index(request: Request, response: Response): Promise<Response> {
    const postRepository = getManager().getRepository(Post);
    const posts = await postRepository.find();

    return response.send(posts);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const postRepository = getManager().getRepository(Post);

    const newPost = postRepository.create({
      name: "Test",
      postLocation: "Test",
      plantSpecies: "Test",
      comment: "Test",
      postImage: "test.png",
      likeCount: 0,
      commentsCount: 0,
      postTime: "Test"
    });

    await postRepository.save(newPost);

    return response.send(newPost);
  }
}