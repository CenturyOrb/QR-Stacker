import prisma from '../config/db.js'
import multer from 'multer'
import fs from 'fs'

export async function getAll(user) {
  const items = await prisma.item.findMany({
    where: { userUID: user.uid },
  });

  const itemsWithImageData = await Promise.all(
    items.map(async (item) => {
      //const imagePath = path.join('resources', 'user', item.userUID, item.imgPath);

      let imageData = null;
      try {
        const fileBuffer = await fs.promises.readFile(`resources/user/${item.userUID}/${item.imgPath}`);
        imageData = `data:${mimeType};base64,${fileBuffer.toString('base64')}`;
      } catch (err) {
        console.warn(`Image not found for ${item.imgPath}`);
      }

      return {
        ...item,
        image: imageData, 
      };
    })
  );

  return itemsWithImageData;
}

export async function create(itemData, user, filename) { 
	if (typeof itemData.price === 'string')
		itemData.price = parseFloat(itemData.price);

	// save image to user resource
	const upload = multer({ dest: `resources/user/${user.uid}` })
	upload.single('image');

	return await prisma.item.create({ 
		data: { ...itemData, userUID: user.uid, imgPath: filename },
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
