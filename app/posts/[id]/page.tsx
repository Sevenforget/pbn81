import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TagBadge } from "@/components/tag-badge";
import { fetchPostFromApi } from "@/lib/api-service";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://isracing.net"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            메인으로 돌아가기
          </Link>

          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author || "관리자"}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {new Date(post.date).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <TagBadge key={index} tag={tag} />
                ))}
              </div>
            )}

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </article>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
