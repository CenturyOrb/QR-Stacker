import { getAllItems } from '../services/itemService.js'

export async function getAllItemHandler(req, res) { 
	return await getAllItems();
}
