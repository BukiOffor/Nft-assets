import axios from "axios";
import Endpoints from "./endpoints";
import HttpSuccessDataHandler from "@/utils/http_response_success_handler";
import HttpErrorHandler from "@/utils/http_error_handler";

export default class APIService {
  static async fetchAllProjects(cb: any) {
    axios
      .get(`${Endpoints.FETCH_ALL_PROJECTS}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async fetchProjectDetail(id: string, cb: any) {
    axios
      .get(`${Endpoints.FETCH_PROJECT_DETAIL.replace(":id", id)}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }
}
