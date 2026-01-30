import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function MediaPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const mediaItems = await prisma.media.findMany({
        orderBy: { createdAt: 'desc' },
        include: { uploadedBy: true },
    });

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">مكتبة الوسائط</h1>
                    <p className="page-subtitle">إدارة الصور والملفات المرفوعة</p>
                </div>
                <button className="btn btn-primary" onClick={() => { }}>
                    📤 رفع ملف جديد
                </button>
            </div>

            {mediaItems.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', padding: '60px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🖼️</div>
                    <h3 style={{ marginBottom: '8px' }}>لا توجد ملفات</h3>
                    <p style={{ color: '#6b7280', marginBottom: '24px' }}>قم برفع صور وملفات لاستخدامها في المحتوى</p>
                    <button className="btn btn-primary">رفع ملف</button>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    {mediaItems.map((media) => (
                        <div key={media.id} className="card" style={{ overflow: 'hidden' }}>
                            <div style={{
                                height: '160px',
                                background: '#f3f4f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                {media.type === 'IMAGE' ? (
                                    <img
                                        src={media.url}
                                        alt={media.fileName || ''}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : media.type === 'VIDEO' ? (
                                    <div style={{ fontSize: '48px' }}>🎬</div>
                                ) : (
                                    <div style={{ fontSize: '48px' }}>📄</div>
                                )}
                            </div>
                            <div style={{ padding: '16px' }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    marginBottom: '4px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {media.fileName || 'بدون اسم'}
                                </div>
                                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                                    {media.type === 'IMAGE' ? 'صورة' : media.type === 'VIDEO' ? 'فيديو' : 'ملف'}
                                    {media.sizeBytes && ` • ${(media.sizeBytes / 1024).toFixed(1)} KB`}
                                </div>
                                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        style={{ flex: 1 }}
                                        onClick={() => navigator.clipboard.writeText(media.url)}
                                    >
                                        نسخ الرابط
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        style={{ background: '#fee2e2', color: '#dc2626' }}
                                    >
                                        حذف
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
