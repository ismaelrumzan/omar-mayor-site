"use client"

import Image from "next/image"
import { PostAndNavQuery, PostQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function BlogPageComponent(props: {
  data: PostAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const backgroundImage = data.post.image ? `${data.post.image}` : "none"
  return (
    <>
      <SiteHeader header={data.header} nav={data.nav} />
      <div className="flex min-h-[calc(100vh-65px)] flex-col">
        {backgroundImage !== "none" && (
          <section className={`relative h-[35vh]`}>
            <Image
              alt={data.post.title || ""}
              className={`size-full object-cover`}
              height={1080}
              src={backgroundImage}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              data-tina-field={tinaField(data.post, "image")}
              width={1920}
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50`}
            >
              <h1
                className="max-w-5xl px-4 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl"
                data-tina-field={tinaField(data.post, "title")}
              >
                {data.post.title || ""}
              </h1>
            </div>
          </section>
        )}
        <section className="container mx-auto max-w-5xl grow px-4 py-8">
          <div
            className="prose max-w-none"
            data-tina-field={tinaField(data.post, "body")}
          >
            <TinaMarkdown content={data.post.body} />
          </div>
        </section>
        <Footer footer={data.footer} />
      </div>
    </>
  )
}
