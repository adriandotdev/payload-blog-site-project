import { Code } from './Component.client'

export type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
  blockType: 'code'
}

type Props = CodeBlockProps & { className?: string }

export const CodeBlock = ({ className, code, language, filename }: Props) => {
  return (
    <div className={`${[className].filter(Boolean).join(' ')} mx-4`}>
      <Code code={code} language={language} filename={filename} />
    </div>
  )
}
