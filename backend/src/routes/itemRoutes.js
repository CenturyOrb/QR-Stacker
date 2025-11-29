import express from 'express'
import { getAllItemsHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controllers/itemController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'

const router = express.Router();

// create item
router.post('/', verifyFirebaseToken, createItemHandler);

// all items
router.get('/', verifyFirebaseToken, getAllItemsHandler);

// update item
router.put('/:id', verifyFirebaseToken, updateItemHandler);

// delete item
router.delete('/:id', verifyFirebaseToken, deleteItemHandler);

export default router;
