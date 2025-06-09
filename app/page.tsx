import { BlogPostCard } from "@/components/blog-post-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPosts } from "@/lib/posts"

export default function Home() {
  const posts = getPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img src="/korean-landscape-banner.png" alt="블로그 배너 이미지" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          <div className="relative py-16 px-8 md:py-24 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">마음의 여백</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl">개인적인 생각과 경험을 공유하는 공간입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
