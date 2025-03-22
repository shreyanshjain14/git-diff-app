import { Request, Response, NextFunction } from "express";

const validateCommitParams = (req: Request, res: Response, next: NextFunction): void => {
  const { owner, repository, oid } = req.params;

  if (!owner || !repository || !oid) {
    res.status(400).json({ message: "Invalid or missing parameters." });
    return;
  }

  if (!/^[0-9a-f]{40}$/.test(oid)) {
    res.status(400).json({ message: "Invalid commit SHA format." });
    return;
  }

  next();
};


export default validateCommitParams;
