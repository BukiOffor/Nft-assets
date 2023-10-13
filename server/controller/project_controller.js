import Routes from "../routes/index_routes.js";
import ProjectService from "../services/project_service.js";

class ProjectController {
    static initialize(app) {
        app.get(Routes.LIST_PROJECTS, ProjectService.listProject);
        app.get(Routes.FETCH_PROJECT, ProjectService.projectDetails);
    }
}

export default ProjectController 