import {check,validationResult} from 'express-validator';

export const validationSignUpRequest = [
    check('firstName')
    .notEmpty().withMessage("FirstName is required"),
    check('lastName')
    .notEmpty().withMessage("LastName is required"),
    check('email')
    .isEmail().withMessage("Email is required"),
    check('password')
    .isLength({min: 6}).withMessage("Password Must be grreater than 6")
]

export const validationSignInRequest = [
    check('email')
    .isEmail().withMessage("Email is required"),
    check('password')
    .isLength({min: 6}).withMessage("Password Must be grreater than 6")
]

export const requestResult =(req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0)
    {
        return res.status(400).json({error: errors.array()[0].msg});
    }
    next();
}