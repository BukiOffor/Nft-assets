import Preconditions from "../utils/preconditions.js";
import ResponseHandler from "../utils/response_handler.js"
import { StatusCodes } from 'http-status-codes';
import Strings from "../lang/strings.js";
class AccountService {
    static async register(req, res) {
        const {
            brand_name, email
        } = req.body;

        const badRequestError = Preconditions.checkNotNull({
            brand_name,
            email
        });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        };
        let isEmailValid = Preconditions.validateEmail(email);
        if (!isEmailValid) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.INVALID_EMAIL);
        };
        const emailExists = await AccountRepository.findByEmail(email);
        if (emailExists) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.EMAIL_ALREADY_EXISTS);
        }
        try {
            const createAccount = await AccountModel.create(({
                brand_name,
                email
            }));
            await createAccount.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, Strings.ACCOUNT_CREATED);
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.ERROR_RESPONSE);
        }
    }
}

export default AccountService;
import AccountModel from "../models/account_model.js";
import AccountRepository from "../repository/account_repo.js";