import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function RolesPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const roles = (await prisma.role.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            users: true,
            permissions: { include: { permission: true } }
        },
    })) as any[];

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">الأدوار والصلاحيات</h1>
                    <p className="page-subtitle">إدارة أدوار المستخدمين وصلاحياتهم</p>
                </div>
                <Link href="/admin/roles/new" className="btn btn-primary">
                    ➕ دور جديد
                </Link>
            </div>

            <div className="data-table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>الدور</th>
                            <th>الوصف</th>
                            <th>عدد المستخدمين</th>
                            <th>الصلاحيات</th>
                            <th>إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                                    لا توجد أدوار. <Link href="/admin/roles/new">أضف دور جديد</Link>
                                </td>
                            </tr>
                        ) : (
                            roles.map((role) => (
                                <tr key={role.id}>
                                    <td>
                                        <span className="badge badge-info">{role.name}</span>
                                    </td>
                                    <td>{role.description || 'بدون وصف'}</td>
                                    <td>{role.users.length} مستخدم</td>
                                    <td>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                            {role.permissions.slice(0, 3).map((rp: any) => (
                                                <span key={rp.permissionId} className="badge badge-success" style={{ fontSize: '11px' }}>
                                                    {rp.permission.key}
                                                </span>
                                            ))}
                                            {role.permissions.length > 3 && (
                                                <span className="badge badge-warning" style={{ fontSize: '11px' }}>
                                                    +{role.permissions.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <Link href={`/admin/roles/${role.id}`} className="btn btn-secondary btn-sm">
                                            تعديل
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
