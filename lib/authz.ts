import { prisma } from "@/lib/prisma";

export async function getUserAuthz(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      roles: {
        select: {
          role: {
            select: {
              name: true,
              permissions: {
                select: { permission: { select: { key: true } } },
              },
            },
          },
        },
      },
    },
  });

  const roles = new Set<string>();
  const perms = new Set<string>();

  for (const ur of user?.roles ?? []) {
    roles.add(ur.role.name);
    for (const rp of ur.role.permissions) perms.add(rp.permission.key);
  }

  return {
    roles: Array.from(roles),
    permissions: Array.from(perms),
    isSuperAdmin: roles.has("SUPER_ADMIN"),
  };
}
