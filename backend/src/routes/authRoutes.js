import express from 'express'
const router = express.Router();
import { loginHandler } form '../controllers/authController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'

router.post('/login', verifyFirebaseToken, loginHandler);

export default router;
