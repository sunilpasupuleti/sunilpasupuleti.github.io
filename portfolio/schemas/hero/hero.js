import {MdDownload, MdPerson} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  icon: MdPerson,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'cvLink',
      title: 'CV Link',
      type: 'string',
    }),
    defineField({
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'btnIcon',
      title: 'Button Icon Name',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),

    defineField({
      name: 'hero_content',
      title: 'Hero Content',
      type: 'array',
      of: [
        {
          title: 'Content',
          type: 'object',
          fields: [
            defineField({
              name: 'count',
              title: 'Experience Count',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Experience description',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
