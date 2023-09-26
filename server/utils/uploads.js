import fs from 'fs';
import multer from "multer";

class Upload {
    static imageUpload() {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const uploadDir = "uploads/";
                fs.mkdirSync(uploadDir, { recursive: true });
                cb(null, uploadDir);
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, uniqueSuffix + '-' + file.originalname);
            },
        });
        return multer({ storage: storage });
    };
}

export default Upload;