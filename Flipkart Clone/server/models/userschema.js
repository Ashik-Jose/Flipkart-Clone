import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Userschema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    contactNumber: {type: String},
    profilePicture: {type: String}
    
},{timestamps: true},);

Userschema.virtual('password')
.set(function(password){
    const salt = bcrypt.genSaltSync(10);
    this.hash_password = bcrypt.hashSync(password,salt);
});

Userschema.virtual('fullName')
.set(function(){
    return `${fullName} ${lastName}`;
})

Userschema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}

const Schema = mongoose.model('User',Userschema);

export default Schema;