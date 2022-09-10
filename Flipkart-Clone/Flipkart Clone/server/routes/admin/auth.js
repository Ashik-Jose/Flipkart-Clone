import express from 'express';
import { signIn,signUp } from '../../controller/admin/auth.js';
import { requestResult, validationSignInRequest, validationSignUpRequest } from '../../validator/auth.js';

const router = express.Router();

router.post('/signIn',validationSignInRequest,requestResult,signIn);
router.post('/signUp',validationSignUpRequest,requestResult,signUp);
// router.post('/profile',requireSignin,(req,res) => {
//     res.status(200).json({user: "profile"});
// });

export default router;