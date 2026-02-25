import prisma from '../config/db.js'
import multer from 'multer'

export async function getAll(user)	{
	return await prisma.item.findMany({
		where: { userUID: user.uid },
	});
}

export async function create(itemData, user) { 
	if (typeof itemData.price === 'string')
		itemData.price = parseFloat(itemData.price);

	// save image to user resource
	const upload = multer({ dest: `resources/user/${user.uid}` })
	upload.single('image');

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
