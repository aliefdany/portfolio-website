import { Router } from "express";
import controllers from "./project.controller";

const router = Router();

// /api/project
router.route("/").get(controllers.getMany);

// /api/project/:id
router.route("/:id").get(controllers.getOne);

export default router;
