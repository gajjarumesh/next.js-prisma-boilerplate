import { NextResponse } from "next/server";

/**
 * Response - Standardized response formatting class
 */
export default class Response {
  /**
   * Return a success JSON response
   * @param {object} data - Data to return
   * @param {number} [status=200] - HTTP status code
   */
  static success(data = {}, status = 200) {
    return NextResponse.json({ success: true, data }, { status });
  }

  /**
   * Return a generic error response
   * @param {string} message - Error message
   * @param {number} [status=400] - HTTP status code
   */
  static error(message = "Something went wrong", status = 400) {
    return NextResponse.json({ success: false, error: message }, { status });
  }

  /**
   * Return validation error response
   * @param {string[]|object} errors - Array or object of errors
   * @param {number} [status=422]
   */
  static validation(errors = [], status = 422) {
    return NextResponse.json({ success: false, errors }, { status });
  }

  /**
   * Return unauthorized response
   * @param {string} message - Error message
   * @param {number} [status=401]
   */
  static unauthorised(message = "Unauthorized", status = 401) {
    return NextResponse.json({ success: false, error: message }, { status });
  }

  /**
   * Return when data not found
   * @param {string} message - Error message
   * @param {number} [status=404]
   */
  static notFoundError(message = "Not Found", status = 404) {
    return NextResponse.json({ success: false, error: message }, { status });
  }

  /**
   * Return internal server error response
   * @param {Error|string} err - Error object or message
   */
  static server(err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
