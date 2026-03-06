import prisma from '../config/db.js'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

export async function getAll(user) {
  const items = await prisma.item.findMany({
    where: { userUID: user.uid },
  });

  const itemsWithImageData = await Promise.all(
    items.map(async (item) => {
      let imageData = null;

      try {
		const currentPath = path.dirname(fileURLToPath(import.meta.url));
		const imagePath = path.join(currentPath, '../../resources/user', item.userUID, item.imgPath);

        const fileBuffer = await fs.promises.readFile(imagePath);
        imageData = `data:image/jpeg;base64,${fileBuffer.toString('base64')}`;
      } catch (err) {
        console.warn(`Image not found for ${item.imgPath}:`, err.message);
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
		where: { uuid: id, userUID: user.uid },	
		data	
	});
}

export async function remove(id, user) {
	return await prisma.item.delete({
		where: { id, userUID: user.uid }
	});
}
