import { Request, Response, NextFunction } from "express";
import githubService from "../services/github.service";

export const getCommitMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { owner, repository, oid } = req.params;
    const commitMetadata = await githubService.fetchCommitMetadata(owner, repository, oid);
    res.json(commitMetadata);
  } catch (error) {
    next(error);
  }
};

export const getCommitDiff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { owner, repository, oid } = req.params;
    const commitDiff = await githubService.fetchCommitDiff(owner, repository, oid);
    res.json(commitDiff);
  } catch (error) {
    next(error);
  }
};
