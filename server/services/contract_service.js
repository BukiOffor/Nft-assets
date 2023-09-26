import { StatusCodes } from 'http-status-codes';
import ContractModel from "../models/contract_model.js";
import ContractRepository from "../repository/contract_repo.js";
import Preconditions from "../utils/preconditions.js";
import ResponseHandler from "../utils/response_handler.js";

class ContractService {
    static async storeContract(req, res) {
        const { address, token } = req.body;
        const badRequestError = Preconditions.checkNotNull({ address });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        }
        try {
            const storeContract = await ContractModel.create({ address, token: token ?? "" });
            await storeContract.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, "Contract stored successfully");
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Error storing contract");
        }
    }

    static async fetchContract(req, res) {
        const { address } = req.params;
        const badRequestError = Preconditions.checkNotNull({ address });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        }
        const addressExists = await ContractRepository.findByAddress(address);
        if (!addressExists) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Address does not exists");
        }
        return ResponseHandler.sendResponseWithData(res, StatusCodes.OK, "Address successfully retrieved", addressExists);
    }
}

export default ContractService;