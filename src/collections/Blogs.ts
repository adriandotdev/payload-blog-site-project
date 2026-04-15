import { Code } from '@/blocks/Code/config'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CollectionConfig } from 'payload'
RichText

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: {
        interval: 800,
      },
    },
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && data.title) {
          const base = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
          const random = Math.floor(1000 + Math.random() * 9000)
          data.slug = `${base}-${random}`
        }
        return data
      },
    ],
    beforeChange: [
      ({ data, operation, originalDoc }) => {
        const isPublishing =
          data._status === 'published' &&
          (operation === 'create' || originalDoc?._status !== 'published')

        if (isPublishing && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }

        return data
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
              required: true,
              defaultValue: '[Untitled]',
            },
            {
              type: 'text',
              name: 'slug',
              label: 'Slug',
              required: true,
              unique: true,
              index: true,
            },
            {
              type: 'relationship',
              name: 'author',
              relationTo: 'users',
              required: true,
            },
            {
              type: 'upload',
              relationTo: 'media',
              name: 'heroImage',
            },
            {
              name: 'publishedAt',
              type: 'date',
              label: 'Published At',
              admin: {
                position: 'sidebar',
                readOnly: true,
                date: {
                  displayFormat: 'MMM d, yyyy',
                },
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              type: 'richText',
              name: 'Content',
              label: 'Content',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  FixedToolbarFeature(),
                  BlocksFeature({ blocks: [Code] }),
                ],
              }),
              required: true,
            },
          ],
        },
        {
          label: 'SEO',
          fields: [],
        },
      ],
    },
  ],
}
