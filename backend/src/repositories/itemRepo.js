import prisma from '../config/db.js'

export async function getAll()	{
	return await prisma.item.findMany();
}

export async function create(itemData, user) { 
	return await prisma.item.create({ 
		data: { ...itemData, userUID: user.uid },
	});
}

export async function update(id, data) { 
	return await prisma.item.update({
		where: { id },	
		data	
	});
}

export async function remove(id) {
	return await prisma.item.delete({
		where: { id }
	});
}
