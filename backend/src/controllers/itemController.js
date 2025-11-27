import { getAllItems, createItem, updateItem, deleteItem } from '../services/itemService.js'

// status code reference: 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#successful_responses
export async function getAllItemsHandler(req, res) { 
	const result = await getAllItems();
	res.status(200).json(result);
}

export async function createItemHandler(req, res) { 
	const newItem = await createItem(req.body, req.user);
	res.status(201).json(newItem);
}

export async function updateItemHandler(req, res) { 
	const data = req.body;
	const id = parseInt(req.params.id);
	const updatedItem = await updateItem(id, data);
	res.status(200).json(updatedItem);
}

export async function deleteItemHandler(req, res) { 
	const id = parseInt(req.params.id);
	await deleteItem(id);
	res.status(204).send();
};
