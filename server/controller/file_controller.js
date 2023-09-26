import Routes from "../routes/index_routes.js";
import FileService from "../services/file_service.js";
import Upload from "../utils/uploads.js";

class FileController {
    static initialize(app) {
        app.post(Routes.UPLOAD, Upload.imageUpload().array('image'), FileService.uploadToCloudinary);
    }
}

export default FileController;