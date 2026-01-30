import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MediaList, { MediaItem } from "./MediaList";

export default async function MediaPage() {
    const session = await getServerSession();
    if (!session) redirect("/login");

    const mediaItemsRaw = await prisma.media.findMany({
        orderBy: { createdAt: 'desc' },
        include: { uploadedBy: true },
    });

    // Cast to ensure compatibility if Prisma types are not perfect matching or missing
    const mediaItems = mediaItemsRaw as unknown as MediaItem[];

    return (
        <div>
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title">مكتبة الوسائط</h1>
                    <p className="page-subtitle">إدارة الصور والملفات المرفوعة</p>
                </div>
                {/* Removed onClick={() => {}} to prevent Server Component error. Update this with actual upload logic or Link later */}
                <button className="btn btn-primary">
                    📤 رفع ملف جديد
                </button>
            </div>

            <MediaList initialMediaItems={mediaItems} />
        </div>
    );
}
