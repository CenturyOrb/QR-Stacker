import { getAll, create, update, remove } from '../repositories/itemRepo.js'

export async function getAllItems(user) { 
	return await getAll(user);
}

export async function createItem(data, user, filename) { 
	return await create(data, user, filename);
}

export async function updateItem(id, data, user) { 
	return await update(id, data, user);
}

export async function deleteItem(id, user) { 
	return await remove(id, user);
}
