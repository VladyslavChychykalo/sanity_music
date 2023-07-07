import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'history',
  title: 'History',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Info',
    },
    {
      name: 'media',
      title: 'Media',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      group: 'info',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedString',
      group: 'info',
    }),
    defineField({
      name: 'historyImgList',
      title: 'History Images List',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'historyImgItem',
          title: 'History Image Item',
          fields: [
            {type: 'image', name: 'srcJpg', title: 'Photo jpg'},
            {type: 'image', name: 'srcWebp', title: 'Photo webp'},
          ],
        },
      ],
    }),
  ],
})
