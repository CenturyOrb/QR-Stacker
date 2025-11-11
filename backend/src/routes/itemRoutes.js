import express from 'express'
import { getAllItemsHandler } from '../controllers/itemController.js'

const router = express.Router();

// all items
router.get('/', getAllPostsHandler);

// all items of specific user

export default router;
