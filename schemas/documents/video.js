import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'videoLinksList',
      title: 'Video Links List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'videoLinksItem',
          title: 'Video Links List',
          fields: [
            {type: 'localizedString', name: 'name', title: 'Name'},
            {type: 'string', name: 'videoLink', title: 'Video Link'},
          ],
        },
      ],
    }),
  ],
})
