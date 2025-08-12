import UserController from "@/controllers/UserController";
import { Response } from "@/libx";

export async function POST(request) {
  try {
    const body = await request.json();
    return await UserController.login(body);
  } catch (error) {
    return Response.server(error.message);
  }
}
