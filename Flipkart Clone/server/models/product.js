import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
   
    price:{
        type: Number,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    offer: {
        type: Number
    },

    productPictures: [
        {img: {type: String}}
    ],

    reviews: [
        {
            userId:{type: mongoose.Schema.Types.ObjectId,ref: "User"},
            review: String
        }
    ],

    category: {type: mongoose.Schema.Types.ObjectId,ref: "category",required: true},

    createdBy: {
        type: mongoose.Types.ObjectId,ref: "User",
        required:true
    },
    updatedAt: Date

},{timestamp: true}
);


const ProductSchema = mongoose.model('product',productSchema);

export default ProductSchema;