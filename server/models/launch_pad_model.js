import mongoose from "mongoose";

const LaunchPadSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: { type: String, required: true },
    category: String,
    features: String,
    blockchain: String,
    business_informatIon: String,
    business_type: String,
    registration_number: String,
    fullname: String,
    website: String,
    location: String,
    role: String,
    email: String,
    phone: String,
    metadata: {
        type: String,
        enum: ['nft', 'crypto']
    },
    price: Number,
    supply: Number,
    portfolio: String,
    social: String,
    achievements: String,
    additional_information: String,
    artwork: [String]
}, { timestamps: true });

const LaunchPadModel = mongoose.model("LaunchPad", LaunchPadSchema);

export default LaunchPadModel;
