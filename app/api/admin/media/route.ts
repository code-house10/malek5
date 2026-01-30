
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { getServerSession } from "next-auth";

export async function GET() {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const media = await prisma.media.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                url: true,
                fileName: true,
                type: true,
            }
        });

        return NextResponse.json(media);
    } catch (error) {
        console.error("Error fetching media:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure upload directory exists
        const uploadDir = join(process.cwd(), "public", "uploads");
        await mkdir(uploadDir, { recursive: true });

        // Generate unique filename
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = file.name.split('.').pop();
        const filename = `upload-${uniqueSuffix}.${ext}`;
        const filepath = join(uploadDir, filename);

        // Write file
        await writeFile(filepath, buffer);

        // Save to DB
        // Assuming user email is in session and we need ID. 
        // For now, we fetch user by email or just skip relation if easier, 
        // but schema has uploadedById relationship.
        let userId = undefined;
        if (session.user?.email) {
            const user = await prisma.user.findUnique({ where: { email: session.user.email } });
            userId = user?.id;
        }

        const media = await prisma.media.create({
            data: {
                url: `/uploads/${filename}`,
                fileName: file.name,
                mimeType: file.type,
                sizeBytes: file.size,
                type: file.type.startsWith('image/') ? 'IMAGE' : file.type.startsWith('video/') ? 'VIDEO' : 'FILE',
                uploadedById: userId,
            },
        });

        return NextResponse.json(media);

    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
