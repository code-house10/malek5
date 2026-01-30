import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const users = (await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        include: { roles: { include: { role: true } } },
    })) as any[];

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">المستخدمين</h1>
                    <p className="page-subtitle">إدارة مستخدمي النظام والصلاحيات</p>
                </div>
                <Link href="/admin/users/new" className="btn btn-primary">
                    ➕ مستخدم جديد
                </Link>
            </div>

            <div className="data-table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>المستخدم</th>
                            <th>البريد الإلكتروني</th>
                            <th>الأدوار</th>
                            <th>الحالة</th>
                            <th>تاريخ التسجيل</th>
                            <th>إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                                    لا يوجد مستخدمين. <Link href="/admin/users/new">أضف مستخدم جديد</Link>
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '14px'
                                            }}>
                                                {(user.name || user.email || 'U').slice(0, 2).toUpperCase()}
                                            </div>
                                            <span>{user.name || 'بدون اسم'}</span>
                                        </div>
                                    </td>
                                    <td style={{ direction: 'ltr', textAlign: 'right' }}>{user.email}</td>
                                    <td>
                                        {user.roles.map((ur: any) => (
                                            <span key={ur.roleId} className="badge badge-info" style={{ marginLeft: '4px' }}>
                                                {ur.role.name}
                                            </span>
                                        ))}
                                        {user.roles.length === 0 && <span className="badge badge-warning">بدون دور</span>}
                                    </td>
                                    <td>
                                        <span className={`badge ${user.isActive ? 'badge-success' : 'badge-danger'}`}>
                                            {user.isActive ? 'نشط' : 'غير نشط'}
                                        </span>
                                    </td>
                                    <td>{new Date(user.createdAt).toLocaleDateString('ar-EG')}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Link href={`/admin/users/${user.id}`} className="btn btn-secondary btn-sm">
                                                تعديل
                                            </Link>
                                        </div>
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
