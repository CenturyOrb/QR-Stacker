import express from 'express'
import multer from 'multer'
import { getAllItemsHandler, getItemHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controllers/itemController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'
import { upload } from "../middleware/upload.js";

const router = express.Router();
// create item
router.post('/', verifyFirebaseToken, upload.single('image'), createItemHandler);

// View all all items 
router.get('/', verifyFirebaseToken, getAllItemsHandler);

// get a specific item
router.get('/:id', getItemHandler);

// update item
// TODO: add request body field validators
router.put('/:id', verifyFirebaseToken, updateItemHandler);

// delete item
router.delete('/:id', verifyFirebaseToken, deleteItemHandler);

export default router;
