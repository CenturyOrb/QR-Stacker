import prisma from '../config/db.js'

export async function upsertUser({uid, email, name}) { 
	return await prisma.user.upsert({
    	where: { uid },
    	update: { email, name },
    	create: { uid, email, name }
    });
}
