'use client'

import type { HeroBlockProps } from '@/blocks/Hero/Component'
import { HeroBlockComponent } from '@/blocks/Hero/Component'

type AnyBlock = { blockType: string; id?: string | null; [key: string]: unknown }

export function RenderBlocks({ blocks }: { blocks: AnyBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? i

        if (block.blockType === 'hero') {
          return <HeroBlockComponent key={key} {...(block as unknown as HeroBlockProps)} />
        }

        return null
      })}
    </>
  )
}
