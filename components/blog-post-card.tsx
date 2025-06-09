import Link from "next/link"
import { TagBadge } from "@/components/tag-badge"
import { User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { BlogPost } from "@/lib/posts"

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  const excerpt = post.content.length > 150 ? post.content.substring(0, 150) + "..." : post.content

  return (
    <Link href={`/posts/${index}`} className="block h-full">
      <Card className="h-full transition-all duration-300 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-sky-100 bg-sky-50 border-sky-100">
        <CardHeader>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author || "관리자"}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.map((tag, idx) => (
                <TagBadge key={idx} tag={tag} size="sm" />
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
