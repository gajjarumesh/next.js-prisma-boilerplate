import userSeeder from "./users";
import roleSeeder from "./roles";

export const rootSeeder = async (prisma) => {
  try {
    await roleSeeder(prisma);
    await userSeeder(prisma);
    console.log("Seeder executed successfully..");
  } catch (error) {
    console.error("Seeding error:", error);
  }
};
