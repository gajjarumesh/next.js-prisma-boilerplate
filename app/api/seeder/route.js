import { rootSeeder } from "@/app/lib/seeders";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    await rootSeeder(prisma);
    return Response.json({ message: "Seeders completed." });
  } catch (err) {
    return Response.json({ error: "Seeder failed." }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
