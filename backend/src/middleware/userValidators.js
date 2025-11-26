import admin from '../../firebase/firebase.js'

export async function verifyFirebaseToken(req, res, next) { 
	const authHeader = req.headers.authorization;
	const error = new Error('Invalid token');
	error.status = 401;
	
	try { 
		if (!authHeader?.startsWith('Bearer '))	throw error; // bearer token does not exists
		const idToken = authHeader.split(' ')[1];
		const decodedToken = await admin.auth().verifyIdToken(idToken);
		req.user = decodedToken; // attach user derived from firebase id provider token
		next();
	} catch (err) {
		if (!err.status) err.status = 401;
		next(err);
	}
}
