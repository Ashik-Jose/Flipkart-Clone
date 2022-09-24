import express from "express";
import { adminMiddleWare, requireSignin } from "../common middleware/index.js";
import {categorycreate, getCategory} from "../controller/category.js";

const router = express.Router();

router.post('/create',requireSignin,adminMiddleWare,categorycreate);
router.get('/getcategories',getCategory);

export default router;