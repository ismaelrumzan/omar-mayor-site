import Link from "next/link"
import {
  PageBlocksFeaturedPosts,
  PageBlocksFeaturedPostsPosts,
} from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturedPosts({
  posts,
}: {
  posts: PageBlocksFeaturedPostsPosts[]
}) {
  return (
    <>
      {posts.length > 0 && (
        <section className="container mx-auto grid grid-cols-1 gap-8 p-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.label}>
              <CardHeader>
                <CardTitle
                  data-tina-field={
                    post.featuredPost?.title &&
                    tinaField(post.featuredPost, "title")
                  }
                >
                  {post.featuredPost?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  data-tina-field={
                    post.featuredPost?.description &&
                    tinaField(post.featuredPost, "description")
                  }
                >
                  {post.featuredPost?.description}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  href={`/blog/${post.featuredPost?._sys.breadcrumbs.join(
                    "/"
                  )}`}
                >
                  <Button>Learn more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
      )}
    </>
  )
}
