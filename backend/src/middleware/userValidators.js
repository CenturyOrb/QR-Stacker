import admin from '../../firebase/firebase.js'

export async function verifyFirebaseToken(req, res, next) { 
	const authHeader = req.headers.authorization;
	const error = new Error('Invalid token');
	error.status = 401;
	
	try { 
		if (!authHeader?.startsWith('Bearer '))	throw error;
		const idToken = authHeader.split(' ')[1];
		const decoded = await admin.auth().verifyIdToken(idToken);
		req.user = decoded; // attach user derived from firebase id provider token
		next();
	} catch (err) {
		if (!err.status) err.status = 401;
		next(err);
	}
}
