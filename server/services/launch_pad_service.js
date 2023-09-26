import Preconditions from "../utils/preconditions.js";
import ResponseHandler from "../utils/response_handler.js"
import { StatusCodes } from 'http-status-codes';
import Strings from "../lang/strings.js";
class LaunchPadService {
    static async createPackage(req, res) {
        const {
            title, description,
            category, features,
            blockchain, business_information,
            business_type,
            registration_number,
            fullname, website,
            location, role,
            email, phone, metadata,
            portofolio, social,
            achievement,
            additional_information,
            artwork, supply,
            price
        } = req.body;

        const badRequestError = Preconditions.checkNotNull({
            title,
            description,
            email,
            metadata
        });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        };
        try {
            const createPackage = await LaunchPadModel.create({
                title,
                description,
                category,
                features,
                blockchain,
                business_information,
                business_type,
                registration_number,
                fullname,
                website,
                location,
                role,
                email,
                phone,
                metadata,
                portofolio,
                social,
                achievement,
                additional_information,
                artwork, supply,
                price
            });
            await createPackage.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, Strings.PACKAGE_SUCCESSFULLY_CREATED);
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.ERROR_RESPONSE);
        }
    }
}

export default LaunchPadService;

import LaunchPadModel from "../models/launch_pad_model.js";
import FileService from "./file_service.js";