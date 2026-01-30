
'use client';

import { useState, useEffect, useRef } from 'react';

type Media = {
    id: string;
    url: string;
    fileName: string;
    type: string;
};

interface MediaSelectProps {
    onSelect: (media: Media) => void;
    onCancel: () => void;
}

export default function MediaSelect({ onSelect, onCancel }: MediaSelectProps) {
    const [mediaItems, setMediaItems] = useState<Media[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const res = await fetch('/api/admin/media');
            if (res.ok) {
                const data = await res.json();
                setMediaItems(data);
            }
        } catch (error) {
            console.error('Failed to fetch media:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        setUploading(true);
        try {
            const res = await fetch('/api/admin/media', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                await fetchMedia(); // Refresh list
            } else {
                alert('فشل رفع الملف');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('حدث خطأ أثناء الرفع');
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '800px',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                <div style={{
                    padding: '16px 24px',
                    borderBottom: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>اختيار صورة</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            disabled={uploading}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {uploading ? 'جاري الرفع...' : '📤 رفع جديد'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={onCancel}
                        >
                            إلغاء
                        </button>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleUpload}
                    />
                </div>

                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '20px',
                    backgroundColor: '#f9fafb'
                }}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>جاري التحميل...</div>
                    ) : mediaItems.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                            لا توجد صور. قم برفع صورة جديدة.
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                            gap: '16px'
                        }}>
                            {mediaItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => onSelect(item)}
                                    style={{
                                        cursor: 'pointer',
                                        border: '2px solid transparent',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        backgroundColor: 'white',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#3b82f6';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ aspectRatio: '1', position: 'relative' }}>
                                        {item.type === 'IMAGE' ? (
                                            <img
                                                src={item.url}
                                                alt={item.fileName}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', fontSize: '24px' }}>
                                                📄
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ padding: '8px', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {item.fileName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
