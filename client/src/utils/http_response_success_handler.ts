export default class HttpSuccessDataHandler {
  static getSuccessResponseData(response: any) {
    if (response != null) {
      return response["data"];
    } else {
      return {
        statusCode: 503,
        message:
          "A possible network error or another unresolvable error occurred",
      };
    }
  }
}
