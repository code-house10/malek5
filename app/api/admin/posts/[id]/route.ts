
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;

        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                coverMedia: true,
            },
        });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();
        const { title, slug, excerpt, contentHtml, status, coverMediaId } = body;

        // Validations
        if (!title || !slug) {
            return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
        }

        const post = await prisma.post.update({
            where: { id },
            data: {
                title,
                slug,
                excerpt,
                contentHtml,
                status,
                coverMediaId: coverMediaId || null,
            },
        });

        return NextResponse.json(post);

    } catch (error) {
        console.error("Error updating post:", error);
        if ((error as any).code === 'P2002') {
            return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;

        await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
