import Product from '../models/product.js';
import multer from 'multer';
import shortid from 'shortid';
import slugify from 'slugify'

export const createProduct =(req,res) => {
   // res.status(200).json({file: req.files, body: req.body});

   const {
    name,price,quantity,description,category,createdBy
   } = req.body;

   let productPictures = [];

   if(req.file.length > 0)
   {
        productPictures = req.files.map(file => {
            return {img: file.location}
        });
   }

   const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id
});

product.save((error,product) => {
    if(error)
        res.status(400).json({error});
    if(product)
        res.status(201).json({product});
});

}

