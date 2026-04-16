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
    maxPerDoc: 50,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation, originalDoc }) => {
        if (data && data.title && (operation === 'create' || !originalDoc?.slug)) {
          const base = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
          const random = Math.floor(1000 + Math.random() * 9000)
          data.slug = `${base}-${random}`
        } else if (
          data &&
          data.title &&
          data.title !== originalDoc.title &&
          operation === 'update'
        ) {
          const base = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
          const slugs = String(originalDoc.slug).split('-')

          data.slug = `${base}-${slugs[slugs.length - 1]}`
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
              admin: {
                description:
                  'Auto-generated from the title — defaults to "[Untitled]" until the title is updated. Feel free to change it.',
              },
            },
            {
              type: 'select',
              options: [
                {
                  label: 'Travel',
                  value: 'travel',
                },
                {
                  label: 'Learning',
                  value: 'learning',
                },
                {
                  label: 'Food',
                  value: 'food',
                },
              ],
              name: 'tag',
              required: true,
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
      ],
    },
  ],
}
