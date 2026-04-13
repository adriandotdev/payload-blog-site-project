import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps>

export const JSXConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  code: ({ node }) => (
    <code className="px-1.5 py-0.5 rounded bg-gray-900 text-gray-800 font-mono text-[0.9em]">
      {node}
    </code>
  ),
  blocks: {
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
  },
})
