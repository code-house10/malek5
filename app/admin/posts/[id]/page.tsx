
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "../_components/PostForm";

interface EditPostPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const { id } = await params;

    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            coverMedia: true,
        },
    });

    if (!post) {
        notFound();
    }

    return <PostForm initialData={post} />;
}
