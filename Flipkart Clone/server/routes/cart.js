import express from "express";
import { userMiddleWare, requireSignin } from "../common middleware/index.js";
import {addToCart} from "../controller/cart.js";

const router = express.Router();

router.post('/add-to-cart',requireSignin,userMiddleWare,addToCart);

export default router;