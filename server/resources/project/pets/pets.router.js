import { Router } from "express";
import petControllers from "./pets.controller";

const router = Router();

// /api/project
router.route("/animals/:id").get(petControllers.getPet);

// /api/project/:id
router.route("/:location/:breed/:type").get(petControllers.getPets);

export default router;
