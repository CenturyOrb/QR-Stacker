import express from 'express'
import { getAllItemsHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controllers/itemController.js'

const router = express.Router();

// create item
router.post('/', createItemHandler);

// all items
router.get('/', getAllItemsHandler);

// update item
router.put('/:id', updateItemHandler);

// delete item
router.delete('/:id', deleteItemHandler);

export default router;
