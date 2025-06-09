import { RichTextBlock } from "@/components/page-renderer"
import RichText from "@/components/RichText"
import { SerializedEditorState, SerializedLexicalNode } from "@payloadcms/richtext-lexical/lexical"

export function RichTextSection({ content }: { content: RichTextBlock }) {

  return (
    <section className={`w-full`}>
      <div className="container py-4 px-4">
        <div className="prose max-w-none">
          <RichText
            data={
              content.content as SerializedEditorState<SerializedLexicalNode>
            }
          />
        </div>
      </div>
    </section>
  )
}
