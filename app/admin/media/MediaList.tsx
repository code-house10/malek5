"use client";

import { useState } from "react";

// Define interface locally ensuring validation of what we expect
export interface MediaItem {
    id: string;
    type: "IMAGE" | "VIDEO" | "FILE";
    url: string;
    fileName: string | null;
    sizeBytes: number | null;
}

interface MediaListProps {
    initialMediaItems: MediaItem[];
}

export default function MediaList({ initialMediaItems }: MediaListProps) {
    const [mediaItems, setMediaItems] = useState<MediaItem[]>(initialMediaItems);

    const copyLink = (url: string) => {
        navigator.clipboard.writeText(url);
        // Optional: You could add a toast notification here
    };

    const deleteMedia = async (id: string) => {
        if (confirm('هل أنت متأكد من حذف هذا الملف؟')) {
            // TODO: Implement actual delete API call
            console.log('Delete requested for:', id);
            // For now, remove from UI
            setMediaItems(prev => prev.filter(item => item.id !== id));
        }
    };

    if (mediaItems.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '60px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🖼️</div>
                <h3 style={{ marginBottom: '8px' }}>لا توجد ملفات</h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>قم برفع صور وملفات لاستخدامها في المحتوى</p>
                <button className="btn btn-primary">رفع ملف</button>
            </div>
        )
    }

    return (
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
                                onClick={() => copyLink(media.url)}
                            >
                                نسخ الرابط
                            </button>
                            <button
                                className="btn btn-sm"
                                style={{ background: '#fee2e2', color: '#dc2626' }}
                                onClick={() => deleteMedia(media.id)}
                            >
                                حذف
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
