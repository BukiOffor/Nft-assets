import mongoose from 'mongoose'

const ContractSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    address: {
        type: String,
        required: true
    },
    token: String
}, { timestamps: true });

const ContractModel = mongoose.model("Contract", ContractSchema);

export default ContractModel;
