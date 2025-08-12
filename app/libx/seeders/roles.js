const roleSeeder = async (prisma) => {
  const roles = ["MasterAdmin", "SuperAdmin", "Admin", "Manager"];

  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
};

export default roleSeeder;
