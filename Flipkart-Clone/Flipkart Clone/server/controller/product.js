import Product from '../models/product.js';
import multer from 'multer';
import shortid from 'shortid';

export const createProduct =(req,res) => {
    res.status(200).json({file: req.file, body: req.body});
}