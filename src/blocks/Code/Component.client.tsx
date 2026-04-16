'use client'

import { Highlight, themes } from 'prism-react-renderer'
import { TextEditorHeader } from './TextEditorHeader'

interface Props {
  code: string
  language?: string
  filename?: string
}

export const Code = ({ code, language = '', filename }: Props) => {
  if (!code) return null

  return (
    <Highlight language={language} code={code} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, tokens }) => {
        return (
          <pre className="bg-black/80 pb-8 my-2 text-xs rounded-md overflow-x-auto text-wrap max-h-[50vh] scroll-auto">
            <TextEditorHeader code={code} language={language} filename={filename} />

            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ className: 'table-row', line })} className="px-4">
                <span className="table-cell select-none text-right text-white/25">{i + 1}</span>

                <span className="table-cell pl-4 text-sm">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}
