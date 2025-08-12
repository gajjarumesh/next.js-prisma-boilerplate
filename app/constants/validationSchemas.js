import { email, z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, "Username is required"),
  password: z.string().min(8, "Password is required"),
});

export const forgotPasswordSchema = z.object({
    email: z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
})