'use client'

import { ClipboardCheck, CopyIcon } from 'lucide-react'
import { useState } from 'react'

interface Props {
  code: string
  language?: string
  filename?: string
}

export function TextEditorHeader({ code, language = 'TypeScript', filename }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopyStatus() {
    if (!isCopied) {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }
  }

  return (
    <div
      className={`bg-[#222] mb-2 px-4 w-full text-emerald-50/75 flex ${
        filename ? 'justify-between' : 'justify-end'
      } font-sans items-center flex-wrap py-2`}
    >
      {filename && <p>{filename}</p>}
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(code)
          handleCopyStatus()
        }}
        disabled={isCopied}
        className={`flex my-4 gap-4 ${!isCopied ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      >
        <div className={`flex gap-2 items-center ${!isCopied ? 'opacity-100' : 'opacity-50'}`}>
          {language && !isCopied ? language.toLowerCase() : 'copied!'}
          {isCopied ? (
            <ClipboardCheck className="stroke-emerald-50 h-4 w-4" />
          ) : (
            <CopyIcon className="stroke-emerald-50 h-4 w-4" />
          )}
        </div>
      </button>
    </div>
  )
}
