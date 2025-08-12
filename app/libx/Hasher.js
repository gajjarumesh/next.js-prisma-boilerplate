import bcrypt from "bcrypt";

/**
 * Hasher - Utility class for password hashing and comparison
 */
export default class Hasher {
  /**
   * Hash a plain password
   * @param {string} password - Plain password
   * @returns {Promise<string>} Hashed password
   */
  static hash(password) {
    return bcrypt.hash(password, 10);
  }

  /**
   * Compare plain password with hashed password
   * @param {string} plain - Plain password
   * @param {string} hashed - Hashed password
   * @returns {Promise<boolean>} True if passwords match
   */
  static compare(plain, hashed) {
    return bcrypt.compare(plain, hashed);
  }
}
