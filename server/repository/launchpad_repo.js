import BaseRepository from "./base_repo.js";
import LaunchPadModel from "../models/launch_pad_model.js";

class LaunchpadRepository extends BaseRepository {
    static async findById(id) {
        return super.findById(LaunchPadModel, id);
    }
}

export default LaunchpadRepository;