import admin from '../../firebase/firebase.js'

export async function verifyFirebaseToken(req, res, next) { 
	// grabs authorization bearer token from request header
	const authHeader = req.headers.authorization;
	const error = new Error('Invalid token');
	error.status = 401;
	
	// get id token --decode--> to idtoken
	try { 
		if (!authHeader?.startsWith('Bearer '))	throw error; // bearer token (firebase id token) does not exists 

		// backend verification if token is valid
		const idToken = authHeader.split(' ')[1];
		// checks ur idtoken if valid: returns user data
		const decodedToken = await admin.auth().verifyIdToken(idToken); 
		req.user = decodedToken; // attach user derived from firebase id provider token
		next();
	} catch (err) {
		if (!err.status) err.status = 401;
		next(err);
	}
}
