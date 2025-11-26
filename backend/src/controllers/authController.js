import { login } from '../services/authService.js'

export async function loginHandler(req, res) { 
	const { uid, email, name } = req.user;
	const user = await login({uid, email, name});
	res.status(200).json(user);
}
