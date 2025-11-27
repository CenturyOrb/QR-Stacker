import prisma from '../config/db.js'

export async function upsertUser(user) { 
	const { uid, email, name } = user;
	return await prisma.user.upsert({
    	where: { uid },
    	update: { email, name },
    	create: { uid, email, name }
    });
}
