import { Button } from "@/components/ui/button"
import { VideoBlock } from "@/components/page-renderer"
import "./styles.css"

export function Video({ content }: { content: VideoBlock }) {
  return (
    <section className="video-section" id={content.anchor || ""}>
      <div className="video-container">
        <h2 className="video-title">{content.title}</h2>

        <div className="responsive-video-wrapper">
          <div className="video-aspect-ratio">
            <iframe
              className="video-iframe"
              src={content.url || ""}
              title={content.title || ""}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
