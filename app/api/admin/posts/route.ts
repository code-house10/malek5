
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { title, slug, excerpt, contentHtml, status, coverMediaId } = body;

        // Basic validation
        if (!title || !slug) {
            return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
        }

        // Get user ID
        let userId = undefined;
        if (session.user?.email) {
            const user = await prisma.user.findUnique({ where: { email: session.user.email } });
            userId = user?.id;
        }

        const post = await prisma.post.create({
            data: {
                title,
                slug,
                excerpt,
                contentHtml,
                status: status || 'DRAFT',
                authorId: userId,
                coverMediaId: coverMediaId || null,
            },
        });

        return NextResponse.json(post);

    } catch (error) {
        console.error("Error creating post:", error);
        // Check for specific Prisma errors (like unique slug)
        if ((error as any).code === 'P2002') {
            return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
