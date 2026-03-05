import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userDir = path.join("resources/user", req.user.uid);
    fs.mkdirSync(userDir, { recursive: true });
    cb(null, userDir);
  },
});

export const upload = multer({ storage });
