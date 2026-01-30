import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const permissions = [
    { key: "manage_users", description: "Create/update/disable users" },
    { key: "manage_roles", description: "Create/update roles" },
    { key: "manage_permissions", description: "Create/update permissions" },
    { key: "manage_posts", description: "Create/update/publish posts" },
    { key: "manage_media", description: "Upload/delete media" },
    { key: "manage_settings", description: "Update site settings" },
    { key: "view_admin", description: "Access admin panel" },
  ] as const;

  // Upsert permissions
  for (const p of permissions) {
    await prisma.permission.upsert({
      where: { key: p.key },
      update: { description: p.description },
      create: { key: p.key, description: p.description },
    });
  }

  const allPerms = await prisma.permission.findMany();

  // Roles
  const superAdmin = await prisma.role.upsert({
    where: { name: "SUPER_ADMIN" },
    update: { description: "Full access" },
    create: { name: "SUPER_ADMIN", description: "Full access" },
  });

  const admin = await prisma.role.upsert({
    where: { name: "ADMIN" },
    update: { description: "Admin access" },
    create: { name: "ADMIN", description: "Admin access" },
  });

  const editor = await prisma.role.upsert({
    where: { name: "EDITOR" },
    update: { description: "Content editor" },
    create: { name: "EDITOR", description: "Content editor" },
  });

  // Attach permissions to roles (SUPER_ADMIN gets all)
  await prisma.rolePermission.deleteMany({
    where: { roleId: { in: [superAdmin.id, admin.id, editor.id] } },
  });

  await prisma.rolePermission.createMany({
    data: allPerms.map((p) => ({ roleId: superAdmin.id, permissionId: p.id })),
    skipDuplicates: true,
  });

  // ADMIN: everything except manage_permissions (مثال)
  const adminPermKeys = ["view_admin", "manage_users", "manage_roles", "manage_posts", "manage_media", "manage_settings"];
  const adminPerms = allPerms.filter((p) => adminPermKeys.includes(p.key));
  await prisma.rolePermission.createMany({
    data: adminPerms.map((p) => ({ roleId: admin.id, permissionId: p.id })),
    skipDuplicates: true,
  });

  // EDITOR: manage_posts + manage_media + view_admin
  const editorPermKeys = ["view_admin", "manage_posts", "manage_media"];
  const editorPerms = allPerms.filter((p) => editorPermKeys.includes(p.key));
  await prisma.rolePermission.createMany({
    data: editorPerms.map((p) => ({ roleId: editor.id, permissionId: p.id })),
    skipDuplicates: true,
  });

  // Default settings
  await prisma.setting.upsert({
    where: { key: "site" },
    update: {},
    create: {
      key: "site",
      description: "Site-wide settings",
      value: {
        siteName: "My CMS",
        phone: "",
        logoUrl: "",
      },
    },
  });

  // Create Super Admin user
  const email = "admin@local.dev";
  const password = "Admin@12345"; // غيّره بعد أول تشغيل
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { name: "Super Admin", passwordHash, isActive: true },
    create: { email, name: "Super Admin", passwordHash, isActive: true },
  });

  // Ensure user has SUPER_ADMIN role
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: superAdmin.id } },
    update: {},
    create: { userId: user.id, roleId: superAdmin.id },
  });

  console.log("✅ Seed complete");
  console.log("Super Admin:", { email, password });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
