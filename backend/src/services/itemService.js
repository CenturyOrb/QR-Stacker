import { getAll, create, update, remove } from '../repositories/itemRepo.js'

export async function getAllItems(user) { 
	return await getAll(user);
}

export async function createItem(data, user) { 
	return await create(data, user);
}

export async function updateItem(id, data) { 
	return await update(id, data);
}

export async function deleteItem(id) { 
	return await remove(id);
}
