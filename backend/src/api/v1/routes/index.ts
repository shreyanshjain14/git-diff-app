import { Router } from "express";
import commitRoutes from "./commit.routes";

const router = Router();

router.use("/repositories", commitRoutes);

export default router;
