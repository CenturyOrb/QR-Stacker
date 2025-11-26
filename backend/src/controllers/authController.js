import prisma from '../config/db.js'

export async function loginHandler(req, res) { 
	const { uid, email, name } = req.user;

	// this should be done in service -> repo
	const user = await prisma.user.upsert({
    	where: { firebaseUid: uid },
    	update: { email, name },
    	create: { firebaseUid: uid, email, name }
  	});
	res.status(200).json(user);
}
