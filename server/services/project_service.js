import { StatusCodes } from "http-status-codes";
import LaunchPadModel from "../models/launch_pad_model.js";
import ResponseHandler from "../utils/response_handler.js";
import LaunchpadRepository from "../repository/launchpad_repo.js";

class ProjectService {
    static async listProject(req, res) {
        try {
            let _projectList = await LaunchPadModel.find();
            return ResponseHandler.sendResponseWithData(res, StatusCodes.OK, "Project List", _projectList);
        }
        catch (error) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Something went wrong");
        }

    }

    static async projectDetails(req, res) {
        const { id } = req.params;
        try {
            let _projectDetail = await LaunchpadRepository.findById(id);
            if (!_projectDetail) {
                return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "project not found");
            }
            return ResponseHandler.sendResponseWithData(res, StatusCodes.OK, "project detail fetched", _projectDetail);
        }
        catch (error) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Something went wrong");
        }
    }

}

export default ProjectService; 