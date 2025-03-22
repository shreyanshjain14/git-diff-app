import { Router } from "express";
import { getCommitMetadata, getCommitDiff } from "../controllers/commit.controller";
import validateCommitParams from "../validators/commit.validator";

const router = Router();

router.get("/:owner/:repository/commits/:oid", validateCommitParams, getCommitMetadata);
router.get("/:owner/:repository/commits/:oid/diff", validateCommitParams, getCommitDiff);

export default router;
