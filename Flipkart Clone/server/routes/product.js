import express from "express";
import { adminMiddleWare, requireSignin } from "../common middleware/index.js";
import { createProduct } from "../controller/product.js";
import multer from 'multer';
import shortid from "shortid";
import path from 'path';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname('__dirname'),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+'+'+file.originalname)
    }
  })

  const upload = multer({storage});

router.post('/create',requireSignin,adminMiddleWare,upload.array('ProductPictures'),createProduct);
//router.get('/getcategories',getCategory);

export default router;