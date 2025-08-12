/**
 * Formatter - Utility class for common data formatting
 */
export default class Formatter {
  /**
   * Extracts all validation error messages from Zod formatted error object
   * @param {object} errorObj - Zod formatted error object
   * @returns {string[]} Array of error messages
   */
  static validation(errorObj) {
    return Object.values(errorObj)
      .flatMap((err) => err._errors)
      .filter(Boolean);
  }
}
