import prisma from '../config/db.js'

export async function getAll(user)	{
	return await prisma.item.findMany({
		where: { userUID: user.uid },
	});
}

export async function create(itemData, user) { 
	return await prisma.item.create({ 
		data: { ...itemData, userUID: user.uid },
	});
}

export async function update(id, data, user) { 
	return await prisma.item.update({
		where: { id, userUID: user.uid },	
		data	
	});
}

export async function remove(id, user) {
	return await prisma.item.delete({
		where: { id, userUID: user.uid }
	});
}
