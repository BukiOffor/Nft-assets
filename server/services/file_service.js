import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs';
import ResponseHandler from '../utils/response_handler.js';
import { StatusCodes } from 'http-status-codes';

class FileService {
    static async uploadToCloudinary(req, res) {
        const files = req.files;
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true
        })
        try {
            let images = [];
            for (let file of files) {
                let uploadImage = await cloudinary.uploader.upload(file.path);
                let uploadedImage = await uploadImage.secure_url;
                images.push(uploadedImage);
                FileService.unlinkFileSync(file.path);
            }
            return ResponseHandler.sendResponseWithData(res, StatusCodes.OK, 'Artworks', images);
        }
        catch (error) {
            console.error(error);
        }
    }

    static unlinkFileSync(filePath) {
        try {
            fs.unlinkSync(filePath);
        } catch (err) {
            console.error(`Error deleting file: ${err.message}`);
        }
    };
}

export default FileService;