import prisma from '../config/db.js'
import fs from "fs";
import path from "path";

export async function upsertUser(user) { 
	const { uid, email, name } = user;

	const existingUser = await prisma.user.findUnique({
    	where: { uid }
  	});
	
	// mkdir for user files
	if (!existingUser) {
  		const userDir = path.join("resources/user", uid);
  		fs.mkdirSync(userDir, { recursive: true });
	}
	return await prisma.user.upsert({
    	where: { uid },
    	update: { email, name },
    	create: { uid, email, name }
    });
}
