import express from 'express'
const router = express.Router();
import { loginHandler } from '../controllers/authController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'

router.get('/login', verifyFirebaseToken, loginHandler);

export default router;
