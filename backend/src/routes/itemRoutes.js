import express from 'express'
import { getAllItemsHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controllers/itemController.js'
import { verifyFirebaseToken } from '../middleware/userValidators.js'

const router = express.Router();

// TODO: route for finding specific item by name

// create item
// TODO: validate new item fields with validators, use express validators
router.post('/', verifyFirebaseToken, createItemHandler);

// all items
router.get('/', verifyFirebaseToken, getAllItemsHandler);

// update item
// TODO: check if id of item is correlated with requesting user
router.put('/:id', verifyFirebaseToken, updateItemHandler);

// delete item
router.delete('/:id', verifyFirebaseToken, deleteItemHandler);

export default router;
