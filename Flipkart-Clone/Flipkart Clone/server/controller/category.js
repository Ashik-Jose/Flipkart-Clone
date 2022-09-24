import mongoose from "mongoose";
import Category  from "../models/category.js";
import slugify from 'slugify'; 


const createCategories =(categories,parentId=null) => {
    const categoryList=[];
    let category;
    if(parentId==null)
        category = categories.filter(cat => cat.parentId==undefined);
    else
    {
        category = categories.filter(cat => cat.parentId==parentId);
    }

    for(let cate of category)
    {
        categoryList.push({
            _id: cate._id,
          //  parentId:cate.parentId,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories,cate._id)
         })
    }

    return categoryList;
}

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

export const getCategory = (req,res)=> {
    Category.find().exec((error,categories) => {
        if(categories)
        {

            const categoryList = createCategories(categories);

            return res.status(201).json({categoryList});
        }
           
        else
            return res.status(400).json({message: error});
    });
}