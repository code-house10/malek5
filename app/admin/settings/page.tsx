import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function SettingsPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const settings = (await prisma.setting.findMany({
        orderBy: { key: 'asc' },
    })) as any[];

    // Default settings structure
    const defaultSettings = {
        site_name: 'نقل العفش',
        site_description: 'شركة متخصصة في نقل العفش والأثاث',
        phone: '+20 123 456 7890',
        email: 'info@naql-afsh.com',
        address: 'القاهرة، مصر',
        whatsapp: '+201234567890',
        facebook: '',
        instagram: '',
    };

    // Merge with existing settings
    const settingsMap = new Map(settings.map(s => [s.key, s.value]));

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">الإعدادات</h1>
                <p className="page-subtitle">إدارة إعدادات الموقع والتواصل</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                {/* General Settings */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">⚙️ الإعدادات العامة</h3>
                    </div>
                    <div className="card-body">
                        <form action="/api/admin/settings" method="POST">
                            <div className="form-group">
                                <label className="form-label">اسم الموقع</label>
                                <input
                                    type="text"
                                    name="site_name"
                                    className="form-input"
                                    defaultValue={String(settingsMap.get('site_name') || defaultSettings.site_name)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">وصف الموقع</label>
                                <textarea
                                    name="site_description"
                                    className="form-textarea"
                                    defaultValue={String(settingsMap.get('site_description') || defaultSettings.site_description)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                💾 حفظ التغييرات
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Settings */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">📞 معلومات التواصل</h3>
                    </div>
                    <div className="card-body">
                        <form action="/api/admin/settings" method="POST">
                            <div className="form-group">
                                <label className="form-label">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    defaultValue={String(settingsMap.get('phone') || defaultSettings.phone)}
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">رقم الواتساب</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    className="form-input"
                                    defaultValue={String(settingsMap.get('whatsapp') || defaultSettings.whatsapp)}
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    defaultValue={String(settingsMap.get('email') || defaultSettings.email)}
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">العنوان</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-input"
                                    defaultValue={String(settingsMap.get('address') || defaultSettings.address)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                💾 حفظ التغييرات
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media Settings */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">🔗 روابط التواصل الاجتماعي</h3>
                    </div>
                    <div className="card-body">
                        <form action="/api/admin/settings" method="POST">
                            <div className="form-group">
                                <label className="form-label">فيسبوك</label>
                                <input
                                    type="url"
                                    name="facebook"
                                    className="form-input"
                                    placeholder="https://facebook.com/..."
                                    defaultValue={String(settingsMap.get('facebook') || '')}
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">انستجرام</label>
                                <input
                                    type="url"
                                    name="instagram"
                                    className="form-input"
                                    placeholder="https://instagram.com/..."
                                    defaultValue={String(settingsMap.get('instagram') || '')}
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                💾 حفظ التغييرات
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
