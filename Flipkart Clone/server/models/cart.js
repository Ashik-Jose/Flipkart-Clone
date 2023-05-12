import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },

    cartItems: [
        {
           product: {type:mongoose.Schema.Types.ObjectId,ref:'product',required:true}, 
           quantity: {type: Number,default: 1},
           price: {type: Number, required: true}
        }
        

    ]

},{timestamp: true}
);


const CartSchema = mongoose.model('cart',cartSchema);

export default CartSchema;