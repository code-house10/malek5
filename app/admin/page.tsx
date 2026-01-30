import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  // Fetch stats
  const [usersCount, postsCount, mediaCount] = await Promise.all([
    prisma.user.count(),
    prisma.post.count(),
    prisma.media.count(),
  ]);

  const stats = [
    { icon: '👥', label: 'المستخدمين', value: usersCount, trend: '+12%', trendUp: true, color: 'users' },
    { icon: '📝', label: 'المقالات', value: postsCount, trend: '+5%', trendUp: true, color: 'posts' },
    { icon: '🖼️', label: 'ملفات الوسائط', value: mediaCount, trend: '+8%', trendUp: true, color: 'media' },
    { icon: '👁️', label: 'الزيارات', value: '1,254', trend: '+23%', trendUp: true, color: 'views' },
  ];

  const quickActions = [
    { href: '/admin/posts/new', icon: '📝', title: 'مقال جديد', desc: 'إنشاء مقال أو خدمة جديدة' },
    { href: '/admin/media', icon: '📤', title: 'رفع ملف', desc: 'رفع صور أو ملفات جديدة' },
    { href: '/admin/users/new', icon: '👤', title: 'مستخدم جديد', desc: 'إضافة مستخدم للنظام' },
    { href: '/admin/settings', icon: '⚙️', title: 'الإعدادات', desc: 'إدارة إعدادات الموقع' },
  ];

  // Get recent posts
  const recentPosts = await prisma.post.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { author: true },
  });

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">لوحة التحكم</h1>
        <p className="page-subtitle">مرحباً بك في لوحة التحكم - نظرة عامة على الموقع</p>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-header">
              <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
              <span className={`stat-trend ${stat.trendUp ? 'up' : 'down'}`}>
                {stat.trend}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href} className="action-card">
            <div className="action-icon">{action.icon}</div>
            <div className="action-text">
              <div className="action-title">{action.title}</div>
              <div className="action-desc">{action.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Posts Table */}
      <div className="data-table-container">
        <div className="data-table-header">
          <h3 className="data-table-title">آخر المقالات</h3>
          <Link href="/admin/posts" className="btn btn-secondary btn-sm">
            عرض الكل
          </Link>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>العنوان</th>
              <th>الكاتب</th>
              <th>الحالة</th>
              <th>التاريخ</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                  لا توجد مقالات بعد. <Link href="/admin/posts/new">أضف مقال جديد</Link>
                </td>
              </tr>
            ) : (
              recentPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.author?.name || 'غير محدد'}</td>
                  <td>
                    <span className={`badge ${post.status === 'PUBLISHED' ? 'badge-success' : 'badge-warning'}`}>
                      {post.status === 'PUBLISHED' ? 'منشور' : 'مسودة'}
                    </span>
                  </td>
                  <td>{new Date(post.createdAt).toLocaleDateString('ar-EG')}</td>
                  <td>
                    <Link href={`/admin/posts/${post.id}`} className="btn btn-secondary btn-sm">
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
