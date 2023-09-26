import Routes from "../routes/index_routes.js";
import LaunchPadService from "../services/launch_pad_service.js";
import Upload from "../utils/uploads.js";

class LaunchPadController {
    static initialize(app) {
        app.post(Routes.CREATE_PACKAGE, LaunchPadService.createPackage);
    }
}

export default LaunchPadController; 