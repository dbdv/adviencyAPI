import { Router } from "express";
import giftController from "../controllers/gifts.controller.js";

const giftRouter = Router();

giftRouter.get("/", giftController.findAll).post("/", giftController.addGift);

export default giftRouter;
