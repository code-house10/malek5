import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function PostsPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: { author: true, coverMedia: true },
    });

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">المقالات</h1>
                    <p className="page-subtitle">إدارة جميع المقالات والخدمات</p>
                </div>
                <Link href="/admin/posts/new" className="btn btn-primary">
                    ➕ مقال جديد
                </Link>
            </div>

            <div className="data-table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>العنوان</th>
                            <th>الرابط</th>
                            <th>الكاتب</th>
                            <th>الحالة</th>
                            <th>تاريخ الإنشاء</th>
                            <th>إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                                    لا توجد مقالات بعد. <Link href="/admin/posts/new">أضف مقال جديد</Link>
                                </td>
                            </tr>
                        ) : (
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            {post.coverMedia && (
                                                <img
                                                    src={post.coverMedia.url}
                                                    alt=""
                                                    style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }}
                                                />
                                            )}
                                            <span>{post.title}</span>
                                        </div>
                                    </td>
                                    <td style={{ direction: 'ltr', textAlign: 'right' }}>{post.slug}</td>
                                    <td>{post.author?.name || 'غير محدد'}</td>
                                    <td>
                                        <span className={`badge ${post.status === 'PUBLISHED' ? 'badge-success' : post.status === 'ARCHIVED' ? 'badge-danger' : 'badge-warning'}`}>
                                            {post.status === 'PUBLISHED' ? 'منشور' : post.status === 'ARCHIVED' ? 'مؤرشف' : 'مسودة'}
                                        </span>
                                    </td>
                                    <td>{new Date(post.createdAt).toLocaleDateString('ar-EG')}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Link href={`/admin/posts/${post.id}`} className="btn btn-secondary btn-sm">
                                                تعديل
                                            </Link>
                                            <form action={`/api/admin/posts/${post.id}/delete`} method="POST">
                                                <button type="submit" className="btn btn-sm" style={{ background: '#fee2e2', color: '#dc2626' }}>
                                                    حذف
                                                </button>
                                            </form>
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
