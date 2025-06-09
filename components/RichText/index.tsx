import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical"
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react"

type NodeTypes = DefaultNodeTypes

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
})

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, ...rest } = props
  return (
    <>
      <RichTextWithoutBlocks converters={jsxConverters} {...rest} />
    </>
  )
}
