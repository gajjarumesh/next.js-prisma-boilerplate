import { hashPassword } from "@/lib/hash";

const userSeeder = async (prisma) => {
  const roles = await prisma.role.findMany();

  for (const role of roles) {
    const hashedPassword = await hashPassword("password123");

    await prisma.user.upsert({
      where: { email: `${role.name.toLowerCase()}@example.com` },
      update: {},
      create: {
        firstName: role.name,
        lastName: "User",
        email: `${role.name.toLowerCase()}@example.com`,
        username: `${role.name.toLowerCase()}`,
        password: hashedPassword,
        contact: "9999999999",
        city: "Demo City",
        country: "Demo Country",
        roleId: role.id,
      },
    });
  }
};

export default userSeeder;