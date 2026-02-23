import express from 'express'
import { getAllItemsHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controllers/itemController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'

const router = express.Router();

// TODO: route for finding specific item by name

// create item
// TODO: validate new item fields with validators, use express validators
router.post('/', verifyFirebaseToken, createItemHandler);

// View all all items 
router.get('/', verifyFirebaseToken, getAllItemsHandler);

// update item
// TODO: add request body field validators
router.put('/:id', verifyFirebaseToken, updateItemHandler);

// delete item
router.delete('/:id', verifyFirebaseToken, deleteItemHandler);

export default router;
