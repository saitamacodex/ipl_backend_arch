import { Router } from "express";
import * as controller from "../controllers/owner.controller.js";

const router = Router();

// create a new owner
router.post("/", controller.createOwner);

// get all owner
router.get("/", controller.getAllOwner);

// get owner by id
router.get("/:id", controller.getOwnerById);

// update onwer by id
router.put("/:id", controller.updateOwner);

// delete owner by id
router.delete("/:id", controller.deleteOwner);

export default router;
