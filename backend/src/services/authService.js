import { upsertUser } from '../repositories/authRepo.js'

export async function login(user) { 
	return await upsertUser(user);
}
