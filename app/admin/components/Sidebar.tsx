'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | undefined;
}

const navItems = [
    {
        section: 'الرئيسية',
        items: [
            { href: '/admin', icon: '📊', label: 'لوحة التحكم' },
        ],
    },
    {
        section: 'المحتوى',
        items: [
            { href: '/admin/posts', icon: '📝', label: 'المقالات' },
            { href: '/admin/services', icon: '🔧', label: 'الخدمات' },
            { href: '/admin/projects', icon: '📁', label: 'المشاريع' },
            { href: '/admin/testimonials', icon: '💬', label: 'آراء العملاء' },
        ],
    },
    {
        section: 'الوسائط',
        items: [
            { href: '/admin/media', icon: '🖼️', label: 'مكتبة الوسائط' },
        ],
    },
    {
        section: 'الإدارة',
        items: [
            { href: '/admin/users', icon: '👥', label: 'المستخدمين' },
            { href: '/admin/roles', icon: '🔐', label: 'الصلاحيات' },
            { href: '/admin/settings', icon: '⚙️', label: 'الإعدادات' },
        ],
    },
];

export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname();

    const getInitials = (name?: string | null, email?: string | null) => {
        if (name) {
            return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        }
        if (email) {
            return email.slice(0, 2).toUpperCase();
        }
        return 'AD';
    };

    return (
        <aside className="admin-sidebar">
            <div className="admin-sidebar-header">
                <div className="admin-logo">
                    <div className="admin-logo-icon">🚚</div>
                    <span className="admin-logo-text">نقل العفش</span>
                </div>
            </div>

            <nav className="admin-nav">
                {navItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="admin-nav-section">
                        <div className="admin-nav-title">{section.section}</div>
                        <ul className="admin-nav-list">
                            {section.items.map((item) => (
                                <li key={item.href} className="admin-nav-item">
                                    <Link
                                        href={item.href}
                                        className={`admin-nav-link ${pathname === item.href ? 'active' : ''}`}
                                    >
                                        <span className="admin-nav-icon">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="admin-sidebar-footer">
                <div className="admin-user">
                    <div className="admin-user-avatar">
                        {getInitials(user?.name, user?.email)}
                    </div>
                    <div className="admin-user-info">
                        <div className="admin-user-name">{user?.name || 'المدير'}</div>
                        <div className="admin-user-role">مدير النظام</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
