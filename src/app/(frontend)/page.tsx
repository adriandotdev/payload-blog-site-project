import { RenderBlocks } from '@/components/RenderBlocks'
import config from '@payload-config'
import { getPayload } from 'payload'
import HeroSection from './_components/HeroSection'
import { RefreshRouteOnSave } from './blogs/_components/RefreshRouteOnSave'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    draft: true,
    where: { slug: { equals: 'hero-section' } },
    limit: 1,
  })

  const page = docs[0]

  if (!page?.layout?.length) {
    return <HeroSection />
  }

  return (
    <>
      <RefreshRouteOnSave />
      <RenderBlocks blocks={page.layout as { blockType: string; id?: string | null }[]} />
    </>
  )
}
