import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { seoPlugin } from '@payloadcms/plugin-seo'
import { Blogs } from './collections/Blogs'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: '/components/Icon',
        Logo: '/components/Logo',
      },
    },
    livePreview: {
      url: ({ req, data, collectionConfig, locale }) =>
        `${req.protocol}//${req.host}/blogs/draft/${data.slug}`, // Localization query param
      collections: ['blogs'],
    },
    meta: {
      titleSuffix: '- Adrian.Dev',
      icons: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          url: 'https://api.dicebear.com/9.x/shapes/svg?seed=Amaya',
        },
      ],
    },
  },
  collections: [Users, Media, Blogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['blogs'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Adrian.Dev - ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
      tabbedUI: true,
    }),
  ],
})
