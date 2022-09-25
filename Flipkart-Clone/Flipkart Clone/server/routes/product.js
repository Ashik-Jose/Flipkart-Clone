import express from "express";
import { adminMiddleWare, requireSignin } from "../common middleware/index.js";
import { createProduct } from "../controller/product.js";
import multer from 'multer';

const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.post('/create',requireSignin,adminMiddleWare,upload.single('ProductPicture'),createProduct);
//router.get('/getcategories',getCategory);

export default router;