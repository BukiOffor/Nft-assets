import Routes from "../routes/index_routes.js";
import ContractService from "../services/contract_service.js";

class ContractController {
    static initialize(app) {
        app.post(Routes.CREATE_CONTRACT, ContractService.storeContract);
        app.get(Routes.FETCH_CONTRACT, ContractService.fetchContract);
    }
}

export default ContractController;