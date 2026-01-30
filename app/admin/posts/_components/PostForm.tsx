
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MediaSelect from '../../components/MediaSelect';

type PostData = {
    id?: string;
    title: string;
    slug: string;
    excerpt: string | null;
    contentHtml: string | null;
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
    coverMedia?: {
        id: string;
        url: string;
    } | null;
};

interface PostFormProps {
    initialData?: PostData;
}

export default function PostForm({ initialData }: PostFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showMediaSelect, setShowMediaSelect] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState<{ id: string, url: string } | null>(
        initialData?.coverMedia ? { id: initialData.coverMedia.id, url: initialData.coverMedia.url } : null
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            excerpt: formData.get('excerpt'),
            contentHtml: formData.get('content'),
            status: formData.get('status'),
            coverMediaId: selectedMedia?.id,
        };

        try {
            const url = initialData?.id
                ? `/api/admin/posts/${initialData.id}`
                : '/api/admin/posts';

            const method = initialData?.id ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push('/admin/posts');
                router.refresh();
            } else {
                const resData = await response.json();
                alert(resData.error || 'حدث خطأ أثناء حفظ المقال');
            }
        } catch (error) {
            alert('حدث خطأ في الاتصال');
        } finally {
            setIsSubmitting(false);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\u0621-\u064A\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleDelete = async () => {
        if (!initialData?.id || !confirm('هل أنت متأكد من حذف هذا المقال؟')) return;

        setIsSubmitting(true);
        try {
            const response = await fetch(`/api/admin/posts/${initialData.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                router.push('/admin/posts');
                router.refresh();
            } else {
                alert('فشل الحذف');
            }
        } catch (error) {
            alert('خطأ في الاتصال');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="page-title">{initialData ? 'تعديل مقال' : 'مقال جديد'}</h1>
                    <p className="page-subtitle">
                        {initialData ? `تعديل: ${initialData.title}` : 'إنشاء مقال أو خدمة جديدة'}
                    </p>
                </div>
                {initialData && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="btn btn-sm"
                        style={{ background: '#fee2e2', color: '#dc2626', height: 'fit-content' }}
                    >
                        حذف المقال
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                    {/* Main Content */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">المحتوى</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="form-label">العنوان *</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-input"
                                    required
                                    placeholder="أدخل عنوان المقال"
                                    defaultValue={initialData?.title}
                                    onChange={(e) => {
                                        const slugInput = document.querySelector('input[name="slug"]') as HTMLInputElement;
                                        if (slugInput && !slugInput.dataset.manual && !initialData) {
                                            slugInput.value = generateSlug(e.target.value);
                                        }
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">الرابط (Slug)</label>
                                <input
                                    type="text"
                                    name="slug"
                                    className="form-input"
                                    placeholder="سيتم إنشاؤه تلقائياً"
                                    style={{ direction: 'ltr', textAlign: 'right' }}
                                    defaultValue={initialData?.slug}
                                    onInput={(e) => {
                                        (e.target as HTMLInputElement).dataset.manual = 'true';
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">المقدمة</label>
                                <textarea
                                    name="excerpt"
                                    className="form-textarea"
                                    placeholder="وصف مختصر للمقال"
                                    rows={3}
                                    defaultValue={initialData?.excerpt || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">المحتوى</label>
                                <textarea
                                    name="content"
                                    className="form-textarea"
                                    placeholder="اكتب محتوى المقال هنا..."
                                    rows={15}
                                    style={{ minHeight: '300px' }}
                                    defaultValue={initialData?.contentHtml || ''}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="card" style={{ marginBottom: '24px' }}>
                            <div className="card-header">
                                <h3 className="card-title">النشر</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">الحالة</label>
                                    <select
                                        name="status"
                                        className="form-select"
                                        defaultValue={initialData?.status || 'DRAFT'}
                                    >
                                        <option value="DRAFT">مسودة</option>
                                        <option value="PUBLISHED">منشور</option>
                                        <option value="ARCHIVED">مؤرشف</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ flex: 1 }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? '⏳ جاري الحفظ...' : '💾 حفظ'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => router.back()}
                                    >
                                        إلغاء
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">صورة الغلاف</h3>
                            </div>
                            <div className="card-body">
                                {selectedMedia ? (
                                    <div style={{ textAlign: 'center' }}>
                                        <img
                                            src={selectedMedia.url}
                                            alt="Cover"
                                            style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => setShowMediaSelect(true)}
                                        >
                                            تغيير الصورة
                                        </button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => setShowMediaSelect(true)}
                                        style={{
                                            border: '2px dashed #e5e7eb',
                                            borderRadius: '12px',
                                            padding: '40px 20px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                                    >
                                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>📤</div>
                                        <div style={{ color: '#6b7280' }}>اضغط لاختيار صورة</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {showMediaSelect && (
                <MediaSelect
                    onSelect={(media) => {
                        setSelectedMedia(media);
                        setShowMediaSelect(false);
                    }}
                    onCancel={() => setShowMediaSelect(false)}
                />
            )}
        </div>
    );
}
