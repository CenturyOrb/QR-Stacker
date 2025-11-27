import { login } from '../services/authService.js'

export async function loginHandler(req, res) { 
	const user = await login(req.user);
	res.status(200).json(user);
}
