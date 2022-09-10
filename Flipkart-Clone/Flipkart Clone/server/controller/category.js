import mongoose from "mongoose";
import Category  from "../models/category.js";
import slugify from 'slugify'; 

export const categorycreate = (req,res) => {
    const categoryObj = {
        name : req.body.name,
        slug: slugify(req.body.name)
    }

    if(req.body.parentId)
        categoryObj.parentId = req.body.parentId;

    const categ = new Category(categoryObj);

    categ.save((error,category) => {
        if(category)
           return res.status(201).json({category});
        else
            return res.status(400).json({message: error});
    });
}