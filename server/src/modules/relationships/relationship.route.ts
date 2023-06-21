import { Router } from "express";
import { authenticate } from "../common/middlewares/authenticate";
import * as controller from "./relationship.controller";

export const relationshipsRouter = Router();

relationshipsRouter.use(authenticate);
relationshipsRouter.get("/", controller.getRelationships);
relationshipsRouter.post("/", controller.createRelationship);
relationshipsRouter.delete("/:id", controller.destroyRelationship);
