import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'filename',
      type: 'text',
    },
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'TSX', value: 'tsx' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'JSX', value: 'jsx' },
        { label: 'CSS', value: 'css' },
        { label: 'HTML', value: 'html' },
        { label: 'Python', value: 'python' },
        // Include as many as you want (https://lucidar.me/en/web-dev/list-of-supported-languages-by-prism/)
      ],
      defaultValue: 'typescript',
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
