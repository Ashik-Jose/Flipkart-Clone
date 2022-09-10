import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
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
    parentId: {
        type: String
    }
},{timestamp: true}
);


const CategorySchema = mongoose.model('category',categorySchema);

export default CategorySchema;