import {
  forgotPasswordSchema,
  loginSchema,
} from "@/constants/validationSchemas";
import { Formatter, Hasher, JWT, Prisma, Response } from "@/libx";

class UserController {
  /**
   * Handles login process: validates inputs, checks credentials, and returns JWT token.
   */
  async login(request) {
    const validated = loginSchema.safeParse(request);
    if (!validated.success) {
      return Response.validation(
        Formatter.validation(validated.error.format())
      );
    }

    const { username, password } = validated.data;

    const user = await Prisma.user.findFirst({ where: { username } });
    if (!user || !(await Hasher.compare(password, user.password))) {
      return Response.unauthorised("Invalid credentials");
    }

    const token = JWT.generate({ userId: user.id });
    return Response.success({ token: token, message: "Login successful" });
  }

  /**
   * Sends OTP to user's email for password reset
   */
  async forgotPassword(request) {
    const validated = forgotPasswordSchema.safeParse(request);
    if (!validated.success) {
      return Response.validation(
        Formatter.validation(validated.error.format())
      );
    }

    const { email } = validated.data;

    const user = await Prisma.user.findFirst({ where: { email } });
    if (!user) return Response.notFoundError("User not found");

    return Response.success(user);
  }
}

export default new UserController();
