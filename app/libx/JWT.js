import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

/**
 * JWT - Utility class for token generation and verification
 */
export default class JWT {
  /**
   * Generate JWT token
   * @param {object} payload - Payload to encode
   * @param {string} [expiresIn='7d'] - Expiration time
   * @returns {string} JWT token
   */
  static generate(payload, expiresIn = "7d") {
    return jwt.sign(payload, SECRET, { expiresIn });
  }

  /**
   * Verify JWT token
   * @param {string} token - JWT token
   * @returns {object|null} Decoded payload or null
   */
  static verify(token) {
    try {
      return jwt.verify(token, SECRET);
    } catch {
      return null;
    }
  }
}
