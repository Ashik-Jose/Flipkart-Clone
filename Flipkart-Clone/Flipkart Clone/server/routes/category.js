import express from "express";
import {categorycreate} from "../controller/category.js";

const router = express.Router();

router.post('/create',categorycreate);

export default router;