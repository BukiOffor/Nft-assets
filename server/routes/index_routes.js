import AccountRoutes from "./account_routes.js";
import LaunchPadRoutes from "./launch_pad_routes.js";
import FileRoutes from "./file_routes.js";
import ContractRoutes from "./contract._routes.js";
import { API_VERSION } from "../constants.js";

const Routes = {
    ...AccountRoutes(API_VERSION),
    ...LaunchPadRoutes(API_VERSION),
    ...FileRoutes(API_VERSION),
    ...ContractRoutes(API_VERSION),
}

export default Routes;