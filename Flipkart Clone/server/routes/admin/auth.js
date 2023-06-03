import express from 'express';
import { signIn,signOut,signUp } from '../../controller/admin/auth.js';
import { requestResult, validationSignInRequest, validationSignUpRequest } from '../../validator/auth.js';
import { requireSignin } from '../../common middleware/index.js';

const router = express.Router();

router.post('/signIn',validationSignInRequest,requestResult,signIn);
router.post('/signUp',validationSignUpRequest,requestResult,signUp);
router.post('/signOut',signOut);

export default router;