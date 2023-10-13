export default class HttpErrorHandler {
  static getErrorResponseData(e: any) {
    if (e !== undefined && e !== null) {
      if (e.hasOwnProperty("response")) {
        let response = e.response;
        if (response !== undefined && response !== null) {
          if (response.hasOwnProperty("data")) {
            let responseData = response["data"];
            if (responseData && responseData.hasOwnProperty("message")) {
              return responseData["message"];
            }
          }
        }
      }
    }
  }
}
