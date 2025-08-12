require("module-alias/register");
const { hashPassword } = require("@/lib/hash");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const roles = ["MasterAdmin", "SuperAdmin", "Admin", "Manager"];

  const roleRecords = await Promise.all(
    roles.map(async (name) =>
      prisma.role.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  await Promise.all(
    roleRecords.map(async (role) => {
      const hashedPassword = await hashPassword("password123");
      return prisma.user.upsert({
        where: { email: `${role.name.toLowerCase()}@example.com` },
        update: {},
        create: {
          first_name: role.name,
          last_name: "User",
          email: `${role.name.toLowerCase()}@example.com`,
          username: `${role.name.toLowerCase()}`,
          password: hashedPassword,
          contact: "9999999999",
          city: "Demo City",
          country: "Demo Country",
          role_id: role.id,
        },
      });
    })
  );
}

main()
  .then(() => {
    console.log("✅ Seeding complete.");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect().finally(() => process.exit(1));
  });
