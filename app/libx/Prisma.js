import { PrismaClient } from "@/generated/prisma/client";
/**
 * Prisma - Singleton class for Prisma DB client access
 */
class Prisma {
  constructor() {
    if (!global._prisma) {
      global._prisma = new PrismaClient();
    }
    this.client = global._prisma;
  }

  /**
   * Get Prisma client instance
   * @returns {PrismaClient}
   */
  static get client() {
    if (!this._instance) {
      this._instance = new Prisma();
    }
    return this._instance.client;
  }
}

export default Prisma.client;
