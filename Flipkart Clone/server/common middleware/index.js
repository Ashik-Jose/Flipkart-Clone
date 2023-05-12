import jwt  from "jsonwebtoken";

export const requireSignin = (req,res,next) => {
    if (req.headers.authorization)
    {
        const token = req.headers.authorization;
        const user = jwt.verify(token,process.env.AUTH_TOKEN);
        console.log(user._id);
        req.user = user;       
    }
    else{
        return res.status(400).json({message: "Authorization Required"});
    }
    next();
   
}

export const userMiddleWare = (req,res,next) => {
    if(req.user.role !== "user")
    {
        return res.status(400).json({message: "User Access Denied"})
    } 
    next();
}

export const adminMiddleWare = (req,res,next) => {
    if(req.user.role !== "admin")
    {
        return res.status(400).json({message: "Admin Access Denied"})
    } 
    next();
}