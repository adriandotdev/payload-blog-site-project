import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
    {
      name: 'ctaLabel',
      label: 'CTA Label',
      type: 'text',
    },
    {
      name: 'ctaHref',
      label: 'CTA Link',
      type: 'text',
    },
  ],
}
