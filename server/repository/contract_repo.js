import ContractModel from "../models/contract_model.js";
import BaseRepository from "./base_repo.js";

class ContractRepository extends BaseRepository {
    static async findById(id) {
        return super.findById(ContractModel, id);
    }

    static async findByAddress(address) {
        return await ContractModel.findOne({ address: address });
    }
}

export default ContractRepository;
